"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var graphql_1 = require("graphql");
var printDefault = function (ast) {
    if (!ast) {
        return '';
    }
    return graphql_1.print(ast);
};
function DefaultValue(_a) {
    var field = _a.field;
    if ('defaultValue' in field && field.defaultValue !== undefined) {
        return (react_1.default.createElement("span", null,
            ' = ',
            react_1.default.createElement("span", { className: "arg-default-value" }, printDefault(graphql_1.astFromValue(field.defaultValue, field.type)))));
    }
    return null;
}
exports.default = DefaultValue;
//# sourceMappingURL=DefaultValue.js.map