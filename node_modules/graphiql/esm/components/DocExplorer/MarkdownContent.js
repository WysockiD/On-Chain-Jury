import React from 'react';
import MD from 'markdown-it';
var md = new MD();
export default function MarkdownContent(_a) {
    var markdown = _a.markdown, className = _a.className;
    if (!markdown) {
        return React.createElement("div", null);
    }
    return (React.createElement("div", { className: className, dangerouslySetInnerHTML: { __html: md.render(markdown) } }));
}
//# sourceMappingURL=MarkdownContent.js.map