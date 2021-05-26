import React, { PropsWithChildren, Component, FunctionComponent } from 'react';
import { GraphQLSchema, OperationDefinitionNode, IntrospectionQuery, GraphQLType } from 'graphql';
import { ToolbarButton } from './ToolbarButton';
import { ToolbarGroup } from './ToolbarGroup';
import { ToolbarMenu } from './ToolbarMenu';
import { QueryEditor } from './QueryEditor';
import { VariableEditor } from './VariableEditor';
import { HeaderEditor } from './HeaderEditor';
import { ResultViewer } from './ResultViewer';
import { DocExplorer } from './DocExplorer';
import { QueryHistory } from './QueryHistory';
import CodeMirrorSizer from '../utility/CodeMirrorSizer';
import StorageAPI, { Storage } from '../utility/StorageAPI';
import { VariableToType } from '../utility/getQueryFacts';
import { GetDefaultFieldNamesFn } from '../utility/fillLeafs';
export declare type Maybe<T> = T | null | undefined;
export declare type FetcherParams = {
    query: string;
    operationName: string;
    variables?: any;
};
export declare type FetcherOpts = {
    headers?: {
        [key: string]: any;
    };
    shouldPersistHeaders: boolean;
};
export declare type FetcherResult = {
    data: IntrospectionQuery;
} | string | {
    data: any;
};
export declare type Fetcher = (graphQLParams: FetcherParams, opts?: FetcherOpts) => Promise<FetcherResult> | Observable<FetcherResult>;
export declare type GraphiQLProps = {
    fetcher: Fetcher;
    schema?: GraphQLSchema;
    query?: string;
    variables?: string;
    headers?: string;
    operationName?: string;
    response?: string;
    storage?: Storage;
    defaultQuery?: string;
    defaultVariableEditorOpen?: boolean;
    defaultSecondaryEditorOpen?: boolean;
    headerEditorEnabled?: boolean;
    shouldPersistHeaders?: boolean;
    onCopyQuery?: (query?: string) => void;
    onEditQuery?: (query?: string) => void;
    onEditVariables?: (value: string) => void;
    onEditHeaders?: (value: string) => void;
    onEditOperationName?: (operationName: string) => void;
    onToggleDocs?: (docExplorerOpen: boolean) => void;
    getDefaultFieldNames?: GetDefaultFieldNamesFn;
    editorTheme?: string;
    onToggleHistory?: (historyPaneOpen: boolean) => void;
    ResultsTooltip?: typeof Component | FunctionComponent;
    readOnly?: boolean;
    docExplorerOpen?: boolean;
};
export declare type GraphiQLState = {
    schema?: GraphQLSchema;
    query?: string;
    variables?: string;
    headers?: string;
    operationName?: string;
    docExplorerOpen: boolean;
    response?: string;
    editorFlex: number;
    secondaryEditorOpen: boolean;
    secondaryEditorHeight: number;
    variableEditorActive: boolean;
    headerEditorActive: boolean;
    headerEditorEnabled: boolean;
    shouldPersistHeaders: boolean;
    historyPaneOpen: boolean;
    docExplorerWidth: number;
    isWaitingForResponse: boolean;
    subscription?: Unsubscribable | null;
    variableToType?: VariableToType;
    operations?: OperationDefinitionNode[];
};
export declare class GraphiQL extends React.Component<GraphiQLProps, GraphiQLState> {
    static formatResult(result: any): string;
    static formatError(rawError: Error): string;
    _editorQueryID: number;
    _storage: StorageAPI;
    codeMirrorSizer: CodeMirrorSizer;
    componentIsMounted: boolean;
    docExplorerComponent: Maybe<DocExplorer>;
    graphiqlContainer: Maybe<HTMLDivElement>;
    resultComponent: Maybe<ResultViewer>;
    variableEditorComponent: Maybe<VariableEditor>;
    headerEditorComponent: Maybe<HeaderEditor>;
    _queryHistory: Maybe<QueryHistory>;
    editorBarComponent: Maybe<HTMLDivElement>;
    queryEditorComponent: Maybe<QueryEditor>;
    resultViewerElement: Maybe<HTMLElement>;
    constructor(props: GraphiQLProps);
    componentDidMount(): void;
    UNSAFE_componentWillMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: GraphiQLProps): void;
    componentDidUpdate(): void;
    safeSetState: (nextState: any, callback?: any) => void;
    render(): JSX.Element;
    static Logo: typeof GraphiQLLogo;
    static Toolbar: typeof GraphiQLToolbar;
    static Footer: typeof GraphiQLFooter;
    static QueryEditor: typeof QueryEditor;
    static VariableEditor: typeof VariableEditor;
    static HeaderEditor: typeof HeaderEditor;
    static ResultViewer: typeof ResultViewer;
    static Button: typeof ToolbarButton;
    static ToolbarButton: typeof ToolbarButton;
    static Group: typeof ToolbarGroup;
    static Menu: typeof ToolbarMenu;
    static MenuItem: React.FC<{
        onSelect: () => void;
        title: string;
        label: string;
    }>;
    getQueryEditor(): import("codemirror").Editor | undefined;
    getVariableEditor(): import("codemirror").Editor | null;
    getHeaderEditor(): import("codemirror").Editor | null;
    refresh(): void;
    autoCompleteLeafs(): string | undefined;
    private fetchSchema;
    private _fetchQuery;
    handleClickReference: (reference: GraphQLType) => void;
    handleRunQuery: (selectedOperationName?: string | undefined) => void;
    handleStopQuery: () => void;
    private _runQueryAtCursor;
    handlePrettifyQuery: () => void;
    handleMergeQuery: () => void;
    handleEditQuery: (this: any, value: string) => void;
    handleCopyQuery: () => void;
    private _updateQueryFacts;
    handleEditVariables: (value: string) => void;
    handleEditHeaders: (value: string) => void;
    handleEditOperationName: (operationName: string) => void;
    handleHintInformationRender: (elem: HTMLDivElement) => void;
    handleEditorRunQuery: () => void;
    private _onClickHintInformation;
    handleToggleDocs: () => void;
    handleToggleHistory: () => void;
    handleSelectHistoryQuery: (query?: string | undefined, variables?: string | undefined, headers?: string | undefined, operationName?: string | undefined) => void;
    private handleResizeStart;
    handleResetResize: () => void;
    private _didClickDragBar;
    private handleDocsResizeStart;
    private handleDocsResetResize;
    private handleTabClickPropogation;
    private handleOpenHeaderEditorTab;
    private handleOpenVariableEditorTab;
    private handleSecondaryEditorResizeStart;
}
declare function GraphiQLLogo<TProps>(props: PropsWithChildren<TProps>): JSX.Element;
declare namespace GraphiQLLogo {
    var displayName: string;
}
declare function GraphiQLToolbar<TProps>(props: PropsWithChildren<TProps>): JSX.Element;
declare namespace GraphiQLToolbar {
    var displayName: string;
}
declare function GraphiQLFooter<TProps>(props: PropsWithChildren<TProps>): JSX.Element;
declare namespace GraphiQLFooter {
    var displayName: string;
}
declare type Unsubscribable = {
    unsubscribe: () => void;
};
declare type Observable<T> = {
    subscribe(opts: {
        next: (value: T) => void;
        error: (error: any) => void;
        complete: () => void;
    }): Unsubscribable;
    subscribe(next: (value: T) => void, error: null | undefined, complete: () => void): Unsubscribable;
    subscribe(next?: (value: T) => void, error?: (error: any) => void, complete?: () => void): Unsubscribable;
};
export {};
//# sourceMappingURL=GraphiQL.d.ts.map