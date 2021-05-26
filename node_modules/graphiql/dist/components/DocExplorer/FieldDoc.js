"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Argument_1 = __importDefault(require("./Argument"));
var Directive_1 = __importDefault(require("./Directive"));
var MarkdownContent_1 = __importDefault(require("./MarkdownContent"));
var TypeLink_1 = __importDefault(require("./TypeLink"));
function FieldDoc(_a) {
    var field = _a.field, onClickType = _a.onClickType;
    var argsDef;
    if (field && 'args' in field && field.args.length > 0) {
        argsDef = (react_1.default.createElement("div", { className: "doc-category" },
            react_1.default.createElement("div", { className: "doc-category-title" }, 'arguments'),
            field.args.map(function (arg) { return (react_1.default.createElement("div", { key: arg.name, className: "doc-category-item" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement(Argument_1.default, { arg: arg, onClickType: onClickType })),
                react_1.default.createElement(MarkdownContent_1.default, { className: "doc-value-description", markdown: arg.description }))); })));
    }
    var directivesDef;
    if (field &&
        field.astNode &&
        field.astNode.directives &&
        field.astNode.directives.length > 0) {
        directivesDef = (react_1.default.createElement("div", { className: "doc-category" },
            react_1.default.createElement("div", { className: "doc-category-title" }, 'directives'),
            field.astNode.directives.map(function (directive) { return (react_1.default.createElement("div", { key: directive.name.value, className: "doc-category-item" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement(Directive_1.default, { directive: directive })))); })));
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(MarkdownContent_1.default, { className: "doc-type-description", markdown: (field === null || field === void 0 ? void 0 : field.description) || 'No Description' }),
        field && 'deprecationReason' in field && (react_1.default.createElement(MarkdownContent_1.default, { className: "doc-deprecation", markdown: field === null || field === void 0 ? void 0 : field.deprecationReason })),
        react_1.default.createElement("div", { className: "doc-category" },
            react_1.default.createElement("div", { className: "doc-category-title" }, 'type'),
            react_1.default.createElement(TypeLink_1.default, { type: field === null || field === void 0 ? void 0 : field.type, onClick: onClickType })),
        argsDef,
        directivesDef));
}
exports.default = FieldDoc;
//# sourceMappingURL=FieldDoc.js.map