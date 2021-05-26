var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { TypeInfo, getNamedType, visit, visitWithTypeInfo, } from 'graphql';
export function uniqueBy(array, iteratee) {
    var FilteredMap = new Map();
    var result = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var item = array_1[_i];
        if (item.kind === 'Field') {
            var uniqueValue = iteratee(item);
            var existing = FilteredMap.get(uniqueValue);
            if (item.directives && item.directives.length) {
                var itemClone = __assign({}, item);
                result.push(itemClone);
            }
            else if (existing && existing.selectionSet && item.selectionSet) {
                existing.selectionSet.selections = __spreadArrays(existing.selectionSet.selections, item.selectionSet.selections);
            }
            else if (!existing) {
                var itemClone = __assign({}, item);
                FilteredMap.set(uniqueValue, itemClone);
                result.push(itemClone);
            }
        }
        else {
            result.push(item);
        }
    }
    return result;
}
export function inlineRelevantFragmentSpreads(fragmentDefinitions, selections, selectionSetType) {
    var _a;
    var selectionSetTypeName = selectionSetType
        ? getNamedType(selectionSetType).name
        : null;
    var outputSelections = [];
    var seenSpreads = [];
    for (var _i = 0, selections_1 = selections; _i < selections_1.length; _i++) {
        var selection = selections_1[_i];
        if (selection.kind === 'FragmentSpread') {
            var fragmentName = selection.name.value;
            if (!selection.directives || selection.directives.length === 0) {
                if (seenSpreads.indexOf(fragmentName) >= 0) {
                    continue;
                }
                else {
                    seenSpreads.push(fragmentName);
                }
            }
            var fragmentDefinition = fragmentDefinitions[selection.name.value];
            if (fragmentDefinition) {
                var typeCondition = fragmentDefinition.typeCondition, directives = fragmentDefinition.directives, selectionSet = fragmentDefinition.selectionSet;
                selection = {
                    kind: 'InlineFragment',
                    typeCondition: typeCondition,
                    directives: directives,
                    selectionSet: selectionSet,
                };
            }
        }
        if (selection.kind === 'InlineFragment' &&
            (!selection.directives || ((_a = selection.directives) === null || _a === void 0 ? void 0 : _a.length) === 0)) {
            var fragmentTypeName = selection.typeCondition
                ? selection.typeCondition.name.value
                : null;
            if (!fragmentTypeName || fragmentTypeName === selectionSetTypeName) {
                outputSelections.push.apply(outputSelections, inlineRelevantFragmentSpreads(fragmentDefinitions, selection.selectionSet.selections, selectionSetType));
                continue;
            }
        }
        outputSelections.push(selection);
    }
    return outputSelections;
}
export default function mergeAST(documentAST, schema) {
    var typeInfo = schema ? new TypeInfo(schema) : null;
    var fragmentDefinitions = Object.create(null);
    for (var _i = 0, _a = documentAST.definitions; _i < _a.length; _i++) {
        var definition = _a[_i];
        if (definition.kind === 'FragmentDefinition') {
            fragmentDefinitions[definition.name.value] = definition;
        }
    }
    var visitors = {
        SelectionSet: function (node) {
            var selectionSetType = typeInfo ? typeInfo.getParentType() : null;
            var selections = node.selections;
            selections = inlineRelevantFragmentSpreads(fragmentDefinitions, selections, selectionSetType);
            selections = uniqueBy(selections, function (selection) {
                return selection.alias ? selection.alias.value : selection.name.value;
            });
            return __assign(__assign({}, node), { selections: selections });
        },
        FragmentDefinition: function () {
            return null;
        },
    };
    return visit(documentAST, typeInfo ? visitWithTypeInfo(typeInfo, visitors) : visitors);
}
//# sourceMappingURL=mergeAst.js.map