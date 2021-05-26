"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSelectedOperationName(prevOperations, prevSelectedOperationName, operations) {
    if (!operations || operations.length < 1) {
        return;
    }
    var names = operations.map(function (op) { return op.name && op.name.value; });
    if (prevSelectedOperationName &&
        names.indexOf(prevSelectedOperationName) !== -1) {
        return prevSelectedOperationName;
    }
    if (prevSelectedOperationName && prevOperations) {
        var prevNames = prevOperations.map(function (op) { return op.name && op.name.value; });
        var prevIndex = prevNames.indexOf(prevSelectedOperationName);
        if (prevIndex !== -1 && prevIndex < names.length) {
            return names[prevIndex];
        }
    }
    return names[0];
}
exports.default = getSelectedOperationName;
//# sourceMappingURL=getSelectedOperationName.js.map