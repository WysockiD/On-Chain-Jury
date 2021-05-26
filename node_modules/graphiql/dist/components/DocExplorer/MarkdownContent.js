"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var markdown_it_1 = __importDefault(require("markdown-it"));
var md = new markdown_it_1.default();
function MarkdownContent(_a) {
    var markdown = _a.markdown, className = _a.className;
    if (!markdown) {
        return react_1.default.createElement("div", null);
    }
    return (react_1.default.createElement("div", { className: className, dangerouslySetInnerHTML: { __html: md.render(markdown) } }));
}
exports.default = MarkdownContent;
//# sourceMappingURL=MarkdownContent.js.map