import CodeMirror from 'codemirror';
import { Maybe } from '../types';
export interface SizerComponent {
    getClientHeight: () => number | null;
    getCodeMirror: () => CodeMirror.Editor;
}
export default class CodeMirrorSizer {
    sizes: Array<number | null>;
    updateSizes(components: Array<Maybe<SizerComponent>>): void;
}
//# sourceMappingURL=CodeMirrorSizer.d.ts.map