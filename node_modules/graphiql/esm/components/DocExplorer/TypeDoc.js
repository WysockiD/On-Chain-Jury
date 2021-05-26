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
import React from 'react';
import { GraphQLObjectType, GraphQLInterfaceType, GraphQLUnionType, GraphQLEnumType, } from 'graphql';
import Argument from './Argument';
import MarkdownContent from './MarkdownContent';
import TypeLink from './TypeLink';
import DefaultValue from './DefaultValue';
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
        if (type instanceof GraphQLUnionType) {
            typesTitle = 'possible types';
            types = schema.getPossibleTypes(type);
        }
        else if (type instanceof GraphQLInterfaceType) {
            typesTitle = 'implementations';
            types = schema.getPossibleTypes(type);
        }
        else if (type instanceof GraphQLObjectType) {
            typesTitle = 'implements';
            types = type.getInterfaces();
        }
        var typesDef;
        if (types && types.length > 0) {
            typesDef = (React.createElement("div", { className: "doc-category" },
                React.createElement("div", { className: "doc-category-title" }, typesTitle),
                types.map(function (subtype) { return (React.createElement("div", { key: subtype.name, className: "doc-category-item" },
                    React.createElement(TypeLink, { type: subtype, onClick: onClickType }))); })));
        }
        var fieldsDef;
        var deprecatedFieldsDef;
        if ('getFields' in type) {
            var fieldMap_1 = type.getFields();
            var fields = Object.keys(fieldMap_1).map(function (name) { return fieldMap_1[name]; });
            fieldsDef = (React.createElement("div", { className: "doc-category" },
                React.createElement("div", { className: "doc-category-title" }, 'fields'),
                fields
                    .filter(function (field) {
                    return 'isDeprecated' in field ? !field.isDeprecated : true;
                })
                    .map(function (field) { return (React.createElement(Field, { key: field.name, type: type, field: field, onClickType: onClickType, onClickField: onClickField })); })));
            var deprecatedFields = fields.filter(function (field) { return 'isDeprecated' in field && field.isDeprecated; });
            if (deprecatedFields.length > 0) {
                deprecatedFieldsDef = (React.createElement("div", { className: "doc-category" },
                    React.createElement("div", { className: "doc-category-title" }, 'deprecated fields'),
                    !this.state.showDeprecated ? (React.createElement("button", { className: "show-btn", onClick: this.handleShowDeprecated }, 'Show deprecated fields...')) : (deprecatedFields.map(function (field) { return (React.createElement(Field, { key: field.name, type: type, field: field, onClickType: onClickType, onClickField: onClickField })); }))));
            }
        }
        var valuesDef;
        var deprecatedValuesDef;
        if (type instanceof GraphQLEnumType) {
            var values = type.getValues();
            valuesDef = (React.createElement("div", { className: "doc-category" },
                React.createElement("div", { className: "doc-category-title" }, 'values'),
                values
                    .filter(function (value) { return !value.isDeprecated; })
                    .map(function (value) { return (React.createElement(EnumValue, { key: value.name, value: value })); })));
            var deprecatedValues = values.filter(function (value) { return value.isDeprecated; });
            if (deprecatedValues.length > 0) {
                deprecatedValuesDef = (React.createElement("div", { className: "doc-category" },
                    React.createElement("div", { className: "doc-category-title" }, 'deprecated values'),
                    !this.state.showDeprecated ? (React.createElement("button", { className: "show-btn", onClick: this.handleShowDeprecated }, 'Show deprecated values...')) : (deprecatedValues.map(function (value) { return (React.createElement(EnumValue, { key: value.name, value: value })); }))));
            }
        }
        return (React.createElement("div", null,
            React.createElement(MarkdownContent, { className: "doc-type-description", markdown: ('description' in type && type.description) || 'No Description' }),
            type instanceof GraphQLObjectType && typesDef,
            fieldsDef,
            deprecatedFieldsDef,
            valuesDef,
            deprecatedValuesDef,
            !(type instanceof GraphQLObjectType) && typesDef));
    };
    return TypeDoc;
}(React.Component));
export default TypeDoc;
function Field(_a) {
    var type = _a.type, field = _a.field, onClickType = _a.onClickType, onClickField = _a.onClickField;
    return (React.createElement("div", { className: "doc-category-item" },
        React.createElement("a", { className: "field-name", onClick: function (event) { return onClickField(field, type, event); } }, field.name),
        'args' in field &&
            field.args &&
            field.args.length > 0 && [
            '(',
            React.createElement("span", { key: "args" }, field.args.map(function (arg) { return (React.createElement(Argument, { key: arg.name, arg: arg, onClickType: onClickType })); })),
            ')',
        ],
        ': ',
        React.createElement(TypeLink, { type: field.type, onClick: onClickType }),
        React.createElement(DefaultValue, { field: field }),
        field.description && (React.createElement(MarkdownContent, { className: "field-short-description", markdown: field.description })),
        'deprecationReason' in field && field.deprecationReason && (React.createElement(MarkdownContent, { className: "doc-deprecation", markdown: field.deprecationReason }))));
}
function EnumValue(_a) {
    var value = _a.value;
    return (React.createElement("div", { className: "doc-category-item" },
        React.createElement("div", { className: "enum-value" }, value.name),
        React.createElement(MarkdownContent, { className: "doc-value-description", markdown: value.description }),
        value.deprecationReason && (React.createElement(MarkdownContent, { className: "doc-deprecation", markdown: value.deprecationReason }))));
}
//# sourceMappingURL=TypeDoc.js.map