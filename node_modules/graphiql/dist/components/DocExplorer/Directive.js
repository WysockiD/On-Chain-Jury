"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function Directive(_a) {
    var directive = _a.directive;
    return (react_1.default.createElement("span", { className: "doc-category-item", id: directive.name.value },
        '@',
        directive.name.value));
}
exports.default = Directive;
//# sourceMappingURL=Directive.js.map