export function getLeft(initialElem) {
    var pt = 0;
    var elem = initialElem;
    while (elem.offsetParent) {
        pt += elem.offsetLeft;
        elem = elem.offsetParent;
    }
    return pt;
}
export function getTop(initialElem) {
    var pt = 0;
    var elem = initialElem;
    while (elem.offsetParent) {
        pt += elem.offsetTop;
        elem = elem.offsetParent;
    }
    return pt;
}
//# sourceMappingURL=elementPosition.js.map