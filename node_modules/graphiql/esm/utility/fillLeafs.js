import { getNamedType, isLeafType, parse, print, TypeInfo, visit, } from 'graphql';
export function fillLeafs(schema, docString, getDefaultFieldNames) {
    var insertions = [];
    if (!schema || !docString) {
        return { insertions: insertions, result: docString };
    }
    var ast;
    try {
        ast = parse(docString);
    }
    catch (error) {
        return { insertions: insertions, result: docString };
    }
    var fieldNameFn = getDefaultFieldNames || defaultGetDefaultFieldNames;
    var typeInfo = new TypeInfo(schema);
    visit(ast, {
        leave: function (node) {
            typeInfo.leave(node);
        },
        enter: function (node) {
            typeInfo.enter(node);
            if (node.kind === 'Field' && !node.selectionSet) {
                var fieldType = typeInfo.getType();
                var selectionSet = buildSelectionSet(isFieldType(fieldType), fieldNameFn);
                if (selectionSet && node.loc) {
                    var indent = getIndentation(docString, node.loc.start);
                    insertions.push({
                        index: node.loc.end,
                        string: ' ' + print(selectionSet).replace(/\n/g, '\n' + indent),
                    });
                }
            }
        },
    });
    return {
        insertions: insertions,
        result: withInsertions(docString, insertions),
    };
}
function defaultGetDefaultFieldNames(type) {
    if (!('getFields' in type)) {
        return [];
    }
    var fields = type.getFields();
    if (fields.id) {
        return ['id'];
    }
    if (fields.edges) {
        return ['edges'];
    }
    if (fields.node) {
        return ['node'];
    }
    var leafFieldNames = [];
    Object.keys(fields).forEach(function (fieldName) {
        if (isLeafType(fields[fieldName].type)) {
            leafFieldNames.push(fieldName);
        }
    });
    return leafFieldNames;
}
function buildSelectionSet(type, getDefaultFieldNames) {
    var namedType = getNamedType(type);
    if (!type || isLeafType(type)) {
        return;
    }
    var fieldNames = getDefaultFieldNames(namedType);
    if (!Array.isArray(fieldNames) ||
        fieldNames.length === 0 ||
        !('getFields' in namedType)) {
        return;
    }
    return {
        kind: 'SelectionSet',
        selections: fieldNames.map(function (fieldName) {
            var fieldDef = namedType.getFields()[fieldName];
            var fieldType = fieldDef ? fieldDef.type : null;
            return {
                kind: 'Field',
                name: {
                    kind: 'Name',
                    value: fieldName,
                },
                selectionSet: buildSelectionSet(fieldType, getDefaultFieldNames),
            };
        }),
    };
}
function withInsertions(initial, insertions) {
    if (insertions.length === 0) {
        return initial;
    }
    var edited = '';
    var prevIndex = 0;
    insertions.forEach(function (_a) {
        var index = _a.index, string = _a.string;
        edited += initial.slice(prevIndex, index) + string;
        prevIndex = index;
    });
    edited += initial.slice(prevIndex);
    return edited;
}
function getIndentation(str, index) {
    var indentStart = index;
    var indentEnd = index;
    while (indentStart) {
        var c = str.charCodeAt(indentStart - 1);
        if (c === 10 || c === 13 || c === 0x2028 || c === 0x2029) {
            break;
        }
        indentStart--;
        if (c !== 9 && c !== 11 && c !== 12 && c !== 32 && c !== 160) {
            indentEnd = indentStart;
        }
    }
    return str.substring(indentStart, indentEnd);
}
function isFieldType(fieldType) {
    if (fieldType) {
        return fieldType;
    }
}
//# sourceMappingURL=fillLeafs.js.map