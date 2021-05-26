import { GraphQLType } from 'graphql';
import type * as CM from 'codemirror';
import React from 'react';
declare type VariableEditorProps = {
    variableToType?: {
        [variable: string]: GraphQLType;
    };
    value?: string;
    onEdit: (value: string) => void;
    readOnly?: boolean;
    onHintInformationRender: (value: HTMLDivElement) => void;
    onPrettifyQuery: (value?: string) => void;
    onMergeQuery: (value?: string) => void;
    onRunQuery: (value?: string) => void;
    editorTheme?: string;
    active?: boolean;
};
export declare class VariableEditor extends React.Component<VariableEditorProps> {
    CodeMirror: any;
    editor: (CM.Editor & {
        options: any;
        showHint: any;
    }) | null;
    cachedValue: string;
    private _node;
    ignoreChangeEvent: boolean;
    constructor(props: VariableEditorProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: VariableEditorProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    getCodeMirror(): CM.Editor;
    getClientHeight(): number | null;
    private _onKeyUp;
    private _onEdit;
    private _onHasCompletion;
}
export {};
//# sourceMappingURL=VariableEditor.d.ts.map