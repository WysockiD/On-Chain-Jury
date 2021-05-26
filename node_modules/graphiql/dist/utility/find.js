"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function find(list, predicate) {
    for (var i = 0; i < list.length; i++) {
        if (predicate(list[i])) {
            return list[i];
        }
    }
}
exports.default = find;
//# sourceMappingURL=find.js.map