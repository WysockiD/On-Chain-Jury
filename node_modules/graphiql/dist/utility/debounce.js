"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function debounce(duration, fn) {
    var timeout;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timeout) {
            window.clearTimeout(timeout);
        }
        timeout = window.setTimeout(function () {
            timeout = null;
            fn.apply(_this, args);
        }, duration);
    };
}
exports.default = debounce;
//# sourceMappingURL=debounce.js.map