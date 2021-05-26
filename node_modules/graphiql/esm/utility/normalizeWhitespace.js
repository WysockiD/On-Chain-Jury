export var invalidCharacters = Array.from({ length: 11 }, function (_, i) {
    return String.fromCharCode(0x2000 + i);
}).concat(['\u2028', '\u2029', '\u202f', '\u00a0']);
var sanitizeRegex = new RegExp('[' + invalidCharacters.join('') + ']', 'g');
export function normalizeWhitespace(line) {
    return line.replace(sanitizeRegex, ' ');
}
//# sourceMappingURL=normalizeWhitespace.js.map