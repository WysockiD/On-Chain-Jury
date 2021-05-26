import React, { Component, FunctionComponent } from 'react';
import type * as CM from 'codemirror';
import { SizerComponent } from '../utility/CodeMirrorSizer';
import { ImagePreview as ImagePreviewComponent } from './ImagePreview';
declare type ResultViewerProps = {
    value?: string;
    editorTheme?: string;
    ResultsTooltip?: typeof Component | FunctionComponent;
    ImagePreview: typeof ImagePreviewComponent;
    registerRef: (node: HTMLElement) => void;
};
export declare class ResultViewer extends React.Component<ResultViewerProps, {}> implements SizerComponent {
    viewer: (CM.Editor & {
        options: any;
    }) | null;
    _node: HTMLElement | null;
    componentDidMount(): void;
    shouldComponentUpdate(nextProps: ResultViewerProps): boolean;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    getCodeMirror(): CM.Editor;
    getClientHeight(): number | null;
}
export {};
//# sourceMappingURL=ResultViewer.d.ts.map