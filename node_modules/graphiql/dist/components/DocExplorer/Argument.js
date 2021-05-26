"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TypeLink_1 = __importDefault(require("./TypeLink"));
var DefaultValue_1 = __importDefault(require("./DefaultValue"));
function Argument(_a) {
    var arg = _a.arg, onClickType = _a.onClickType, showDefaultValue = _a.showDefaultValue;
    return (react_1.default.createElement("span", { className: "arg" },
        react_1.default.createElement("span", { className: "arg-name" }, arg.name),
        ': ',
        react_1.default.createElement(TypeLink_1.default, { type: arg.type, onClick: onClickType }),
        showDefaultValue !== false && react_1.default.createElement(DefaultValue_1.default, { field: arg })));
}
exports.default = Argument;
//# sourceMappingURL=Argument.js.map