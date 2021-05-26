import React from 'react';
import { astFromValue, print } from 'graphql';
var printDefault = function (ast) {
    if (!ast) {
        return '';
    }
    return print(ast);
};
export default function DefaultValue(_a) {
    var field = _a.field;
    if ('defaultValue' in field && field.defaultValue !== undefined) {
        return (React.createElement("span", null,
            ' = ',
            React.createElement("span", { className: "arg-default-value" }, printDefault(astFromValue(field.defaultValue, field.type)))));
    }
    return null;
}
//# sourceMappingURL=DefaultValue.js.map