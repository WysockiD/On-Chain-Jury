import React from 'react';
export default function Directive(_a) {
    var directive = _a.directive;
    return (React.createElement("span", { className: "doc-category-item", id: directive.name.value },
        '@',
        directive.name.value));
}
//# sourceMappingURL=Directive.js.map