import React from 'react';
import { GraphQLSchema, GraphQLNamedType } from 'graphql';
import { FieldType } from './DocExplorer/types';
declare type NavStackItem = {
    name: string;
    title?: string;
    search?: string;
    def?: GraphQLNamedType | FieldType;
};
declare type DocExplorerProps = {
    schema?: GraphQLSchema | null;
};
declare type DocExplorerState = {
    navStack: NavStackItem[];
};
export declare class DocExplorer extends React.Component<DocExplorerProps, DocExplorerState> {
    constructor(props: DocExplorerProps);
    shouldComponentUpdate(nextProps: DocExplorerProps, nextState: DocExplorerState): boolean;
    render(): JSX.Element;
    showDoc(typeOrField: GraphQLNamedType | FieldType): void;
    showDocForReference(reference: any): void;
    showSearch(search: string): void;
    reset(): void;
    handleNavBackClick: () => void;
    handleClickType: (type: GraphQLNamedType) => void;
    handleClickField: (field: FieldType) => void;
    handleSearch: (value: string) => void;
}
export {};
//# sourceMappingURL=DocExplorer.d.ts.map