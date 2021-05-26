"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CodeMirrorSizer = (function () {
    function CodeMirrorSizer() {
        this.sizes = [];
    }
    CodeMirrorSizer.prototype.updateSizes = function (components) {
        var _this = this;
        components.forEach(function (component, i) {
            if (component) {
                var size = component.getClientHeight();
                if (i <= _this.sizes.length && size !== _this.sizes[i]) {
                    var editor = component.getCodeMirror();
                    if (editor) {
                        editor.setSize(null, null);
                    }
                }
                _this.sizes[i] = size;
            }
        });
    };
    return CodeMirrorSizer;
}());
exports.default = CodeMirrorSizer;
//# sourceMappingURL=CodeMirrorSizer.js.map