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
var graphql_1 = require("graphql");
var Argument_1 = __importDefault(require("./Argument"));
var MarkdownContent_1 = __importDefault(require("./MarkdownContent"));
var TypeLink_1 = __importDefault(require("./TypeLink"));
var DefaultValue_1 = __importDefault(require("./DefaultValue"));
var TypeDoc = (function (_super) {
    __extends(TypeDoc, _super);
    function TypeDoc(props) {
        var _this = _super.call(this, props) || this;
        _this.handleShowDeprecated = function () { return _this.setState({ showDeprecated: true }); };
        _this.state = { showDeprecated: false };
        return _this;
    }
    TypeDoc.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return (this.props.type !== nextProps.type ||
            this.props.schema !== nextProps.schema ||
            this.state.showDeprecated !== nextState.showDeprecated);
    };
    TypeDoc.prototype.render = function () {
        var schema = this.props.schema;
        var type = this.props.type;
        var onClickType = this.props.onClickType;
        var onClickField = this.props.onClickField;
        var typesTitle = null;
        var types = [];
        if (type instanceof graphql_1.GraphQLUnionType) {
            typesTitle = 'possible types';
            types = schema.getPossibleTypes(type);
        }
        else if (type instanceof graphql_1.GraphQLInterfaceType) {
            typesTitle = 'implementations';
            types = schema.getPossibleTypes(type);
        }
        else if (type instanceof graphql_1.GraphQLObjectType) {
            typesTitle = 'implements';
            types = type.getInterfaces();
        }
        var typesDef;
        if (types && types.length > 0) {
            typesDef = (react_1.default.createElement("div", { className: "doc-category" },
                react_1.default.createElement("div", { className: "doc-category-title" }, typesTitle),
                types.map(function (subtype) { return (react_1.default.createElement("div", { key: subtype.name, className: "doc-category-item" },
                    react_1.default.createElement(TypeLink_1.default, { type: subtype, onClick: onClickType }))); })));
        }
        var fieldsDef;
        var deprecatedFieldsDef;
        if ('getFields' in type) {
            var fieldMap_1 = type.getFields();
            var fields = Object.keys(fieldMap_1).map(function (name) { return fieldMap_1[name]; });
            fieldsDef = (react_1.default.createElement("div", { className: "doc-category" },
                react_1.default.createElement("div", { className: "doc-category-title" }, 'fields'),
                fields
                    .filter(function (field) {
                    return 'isDeprecated' in field ? !field.isDeprecated : true;
                })
                    .map(function (field) { return (react_1.default.createElement(Field, { key: field.name, type: type, field: field, onClickType: onClickType, onClickField: onClickField })); })));
            var deprecatedFields = fields.filter(function (field) { return 'isDeprecated' in field && field.isDeprecated; });
            if (deprecatedFields.length > 0) {
                deprecatedFieldsDef = (react_1.default.createElement("div", { className: "doc-category" },
                    react_1.default.createElement("div", { className: "doc-category-title" }, 'deprecated fields'),
                    !this.state.showDeprecated ? (react_1.default.createElement("button", { className: "show-btn", onClick: this.handleShowDeprecated }, 'Show deprecated fields...')) : (deprecatedFields.map(function (field) { return (react_1.default.createElement(Field, { key: field.name, type: type, field: field, onClickType: onClickType, onClickField: onClickField })); }))));
            }
        }
        var valuesDef;
        var deprecatedValuesDef;
        if (type instanceof graphql_1.GraphQLEnumType) {
            var values = type.getValues();
            valuesDef = (react_1.default.createElement("div", { className: "doc-category" },
                react_1.default.createElement("div", { className: "doc-category-title" }, 'values'),
                values
                    .filter(function (value) { return !value.isDeprecated; })
                    .map(function (value) { return (react_1.default.createElement(EnumValue, { key: value.name, value: value })); })));
            var deprecatedValues = values.filter(function (value) { return value.isDeprecated; });
            if (deprecatedValues.length > 0) {
                deprecatedValuesDef = (react_1.default.createElement("div", { className: "doc-category" },
                    react_1.default.createElement("div", { className: "doc-category-title" }, 'deprecated values'),
                    !this.state.showDeprecated ? (react_1.default.createElement("button", { className: "show-btn", onClick: this.handleShowDeprecated }, 'Show deprecated values...')) : (deprecatedValues.map(function (value) { return (react_1.default.createElement(EnumValue, { key: value.name, value: value })); }))));
            }
        }
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(MarkdownContent_1.default, { className: "doc-type-description", markdown: ('description' in type && type.description) || 'No Description' }),
            type instanceof graphql_1.GraphQLObjectType && typesDef,
            fieldsDef,
            deprecatedFieldsDef,
            valuesDef,
            deprecatedValuesDef,
            !(type instanceof graphql_1.GraphQLObjectType) && typesDef));
    };
    return TypeDoc;
}(react_1.default.Component));
exports.default = TypeDoc;
function Field(_a) {
    var type = _a.type, field = _a.field, onClickType = _a.onClickType, onClickField = _a.onClickField;
    return (react_1.default.createElement("div", { className: "doc-category-item" },
        react_1.default.createElement("a", { className: "field-name", onClick: function (event) { return onClickField(field, type, event); } }, field.name),
        'args' in field &&
            field.args &&
            field.args.length > 0 && [
            '(',
            react_1.default.createElement("span", { key: "args" }, field.args.map(function (arg) { return (react_1.default.createElement(Argument_1.default, { key: arg.name, arg: arg, onClickType: onClickType })); })),
            ')',
        ],
        ': ',
        react_1.default.createElement(TypeLink_1.default, { type: field.type, onClick: onClickType }),
        react_1.default.createElement(DefaultValue_1.default, { field: field }),
        field.description && (react_1.default.createElement(MarkdownContent_1.default, { className: "field-short-description", markdown: field.description })),
        'deprecationReason' in field && field.deprecationReason && (react_1.default.createElement(MarkdownContent_1.default, { className: "doc-deprecation", markdown: field.deprecationReason }))));
}
function EnumValue(_a) {
    var value = _a.value;
    return (react_1.default.createElement("div", { className: "doc-category-item" },
        react_1.default.createElement("div", { className: "enum-value" }, value.name),
        react_1.default.createElement(MarkdownContent_1.default, { className: "doc-value-description", markdown: value.description }),
        value.deprecationReason && (react_1.default.createElement(MarkdownContent_1.default, { className: "doc-deprecation", markdown: value.deprecationReason }))));
}
//# sourceMappingURL=TypeDoc.js.map