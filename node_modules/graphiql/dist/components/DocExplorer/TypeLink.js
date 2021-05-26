"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var graphql_1 = require("graphql");
function TypeLink(props) {
    var onClick = props.onClick ? props.onClick : function () { return null; };
    return renderType(props.type, onClick);
}
exports.default = TypeLink;
function renderType(type, onClick) {
    if (type instanceof graphql_1.GraphQLNonNull) {
        return (react_1.default.createElement("span", null,
            renderType(type.ofType, onClick),
            '!'));
    }
    if (type instanceof graphql_1.GraphQLList) {
        return (react_1.default.createElement("span", null,
            '[',
            renderType(type.ofType, onClick),
            ']'));
    }
    return (react_1.default.createElement("a", { className: "type-name", onClick: function (event) {
            event.preventDefault();
            onClick(type, event);
        }, href: "#" }, type === null || type === void 0 ? void 0 : type.name));
}
//# sourceMappingURL=TypeLink.js.map