"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Argument_1 = __importDefault(require("./Argument"));
var TypeLink_1 = __importDefault(require("./TypeLink"));
var SearchResults = (function (_super) {
    __extends(SearchResults, _super);
    function SearchResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchResults.prototype.shouldComponentUpdate = function (nextProps) {
        return (this.props.schema !== nextProps.schema ||
            this.props.searchValue !== nextProps.searchValue);
    };
    SearchResults.prototype.render = function () {
        var searchValue = this.props.searchValue;
        var withinType = this.props.withinType;
        var schema = this.props.schema;
        var onClickType = this.props.onClickType;
        var onClickField = this.props.onClickField;
        var matchedWithin = [];
        var matchedTypes = [];
        var matchedFields = [];
        var typeMap = schema.getTypeMap();
        var typeNames = Object.keys(typeMap);
        if (withinType) {
            typeNames = typeNames.filter(function (n) { return n !== withinType.name; });
            typeNames.unshift(withinType.name);
        }
        var _loop_1 = function (typeName) {
            if (matchedWithin.length + matchedTypes.length + matchedFields.length >=
                100) {
                return "break";
            }
            var type = typeMap[typeName];
            if (withinType !== type && isMatch(typeName, searchValue)) {
                matchedTypes.push(react_1.default.createElement("div", { className: "doc-category-item", key: typeName },
                    react_1.default.createElement(TypeLink_1.default, { type: type, onClick: onClickType })));
            }
            if ('getFields' in type) {
                var fields_1 = type.getFields();
                Object.keys(fields_1).forEach(function (fieldName) {
                    var field = fields_1[fieldName];
                    var matchingArgs;
                    if (!isMatch(fieldName, searchValue)) {
                        if ('args' in field && field.args.length) {
                            matchingArgs = field.args.filter(function (arg) {
                                return isMatch(arg.name, searchValue);
                            });
                            if (matchingArgs.length === 0) {
                                return;
                            }
                        }
                        else {
                            return;
                        }
                    }
                    var match = (react_1.default.createElement("div", { className: "doc-category-item", key: typeName + '.' + fieldName },
                        withinType !== type && [
                            react_1.default.createElement(TypeLink_1.default, { key: "type", type: type, onClick: onClickType }),
                            '.',
                        ],
                        react_1.default.createElement("a", { className: "field-name", onClick: function (event) { return onClickField(field, type, event); } }, field.name),
                        matchingArgs && [
                            '(',
                            react_1.default.createElement("span", { key: "args" }, matchingArgs.map(function (arg) { return (react_1.default.createElement(Argument_1.default, { key: arg.name, arg: arg, onClickType: onClickType, showDefaultValue: false })); })),
                            ')',
                        ]));
                    if (withinType === type) {
                        matchedWithin.push(match);
                    }
                    else {
                        matchedFields.push(match);
                    }
                });
            }
        };
        for (var _i = 0, typeNames_1 = typeNames; _i < typeNames_1.length; _i++) {
            var typeName = typeNames_1[_i];
            var state_1 = _loop_1(typeName);
            if (state_1 === "break")
                break;
        }
        if (matchedWithin.length + matchedTypes.length + matchedFields.length ===
            0) {
            return react_1.default.createElement("span", { className: "doc-alert-text" }, 'No results found.');
        }
        if (withinType && matchedTypes.length + matchedFields.length > 0) {
            return (react_1.default.createElement("div", null,
                matchedWithin,
                react_1.default.createElement("div", { className: "doc-category" },
                    react_1.default.createElement("div", { className: "doc-category-title" }, 'other results'),
                    matchedTypes,
                    matchedFields)));
        }
        return (react_1.default.createElement("div", null,
            matchedWithin,
            matchedTypes,
            matchedFields));
    };
    return SearchResults;
}(react_1.default.Component));
exports.default = SearchResults;
function isMatch(sourceText, searchValue) {
    try {
        var escaped = searchValue.replace(/[^_0-9A-Za-z]/g, function (ch) { return '\\' + ch; });
        return sourceText.search(new RegExp(escaped, 'i')) !== -1;
    }
    catch (e) {
        return sourceText.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    }
}
//# sourceMappingURL=SearchResults.js.map