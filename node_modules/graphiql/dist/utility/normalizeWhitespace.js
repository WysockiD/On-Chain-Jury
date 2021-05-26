"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeWhitespace = exports.invalidCharacters = void 0;
exports.invalidCharacters = Array.from({ length: 11 }, function (_, i) {
    return String.fromCharCode(0x2000 + i);
}).concat(['\u2028', '\u2029', '\u202f', '\u00a0']);
var sanitizeRegex = new RegExp('[' + exports.invalidCharacters.join('') + ']', 'g');
function normalizeWhitespace(line) {
    return line.replace(sanitizeRegex, ' ');
}
exports.normalizeWhitespace = normalizeWhitespace;
//# sourceMappingURL=normalizeWhitespace.js.map