import React from 'react';
import { GraphQLList, GraphQLNonNull, } from 'graphql';
export default function TypeLink(props) {
    var onClick = props.onClick ? props.onClick : function () { return null; };
    return renderType(props.type, onClick);
}
function renderType(type, onClick) {
    if (type instanceof GraphQLNonNull) {
        return (React.createElement("span", null,
            renderType(type.ofType, onClick),
            '!'));
    }
    if (type instanceof GraphQLList) {
        return (React.createElement("span", null,
            '[',
            renderType(type.ofType, onClick),
            ']'));
    }
    return (React.createElement("a", { className: "type-name", onClick: function (event) {
            event.preventDefault();
            onClick(type, event);
        }, href: "#" }, type === null || type === void 0 ? void 0 : type.name));
}
//# sourceMappingURL=TypeLink.js.map