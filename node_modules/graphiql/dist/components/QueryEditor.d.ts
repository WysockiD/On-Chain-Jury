import React from 'react';
import type * as CM from 'codemirror';
import { GraphQLSchema, GraphQLType } from 'graphql';
import { SizerComponent } from '../utility/CodeMirrorSizer';
declare type QueryEditorProps = {
    schema?: GraphQLSchema;
    value?: string;
    onEdit?: (value: string) => void;
    readOnly?: boolean;
    onHintInformationRender: (elem: HTMLDivElement) => void;
    onClickReference?: (reference: GraphQLType) => void;
    onCopyQuery?: () => void;
    onPrettifyQuery?: () => void;
    onMergeQuery?: () => void;
    onRunQuery?: () => void;
    editorTheme?: string;
};
export declare class QueryEditor extends React.Component<QueryEditorProps, {}> implements SizerComponent {
    cachedValue: string | undefined;
    editor: (CM.Editor & {
        options: any;
        showHint: any;
    }) | null;
    ignoreChangeEvent: boolean;
    _node: HTMLElement | null;
    constructor(props: QueryEditorProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: QueryEditorProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    getCodeMirror(): CM.Editor;
    getClientHeight(): number | null;
    private _onKeyUp;
    private _onEdit;
    private _onHasCompletion;
    private _onBeforeChange;
}
export {};
//# sourceMappingURL=QueryEditor.d.ts.map