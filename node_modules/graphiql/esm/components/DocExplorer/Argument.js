import React from 'react';
import TypeLink from './TypeLink';
import DefaultValue from './DefaultValue';
export default function Argument(_a) {
    var arg = _a.arg, onClickType = _a.onClickType, showDefaultValue = _a.showDefaultValue;
    return (React.createElement("span", { className: "arg" },
        React.createElement("span", { className: "arg-name" }, arg.name),
        ': ',
        React.createElement(TypeLink, { type: arg.type, onClick: onClickType }),
        showDefaultValue !== false && React.createElement(DefaultValue, { field: arg })));
}
//# sourceMappingURL=Argument.js.map