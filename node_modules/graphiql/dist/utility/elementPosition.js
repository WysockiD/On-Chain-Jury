"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTop = exports.getLeft = void 0;
function getLeft(initialElem) {
    var pt = 0;
    var elem = initialElem;
    while (elem.offsetParent) {
        pt += elem.offsetLeft;
        elem = elem.offsetParent;
    }
    return pt;
}
exports.getLeft = getLeft;
function getTop(initialElem) {
    var pt = 0;
    var elem = initialElem;
    while (elem.offsetParent) {
        pt += elem.offsetTop;
        elem = elem.offsetParent;
    }
    return pt;
}
exports.getTop = getTop;
//# sourceMappingURL=elementPosition.js.map