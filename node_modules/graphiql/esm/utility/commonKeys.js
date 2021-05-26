var _a;
var isMacOs = false;
if (typeof window === 'object') {
    isMacOs = window.navigator.platform === 'MacIntel';
}
var commonKeys = (_a = {},
    _a[isMacOs ? 'Cmd-F' : 'Ctrl-F'] = 'findPersistent',
    _a['Cmd-G'] = 'findPersistent',
    _a['Ctrl-G'] = 'findPersistent',
    _a['Ctrl-Left'] = 'goSubwordLeft',
    _a['Ctrl-Right'] = 'goSubwordRight',
    _a['Alt-Left'] = 'goGroupLeft',
    _a['Alt-Right'] = 'goGroupRight',
    _a);
export default commonKeys;
//# sourceMappingURL=commonKeys.js.map