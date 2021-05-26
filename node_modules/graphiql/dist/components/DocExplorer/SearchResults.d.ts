import React from 'react';
import { GraphQLSchema, GraphQLNamedType } from 'graphql';
import { OnClickFieldFunction, OnClickTypeFunction } from './types';
declare type SearchResultsProps = {
    schema: GraphQLSchema;
    withinType?: GraphQLNamedType;
    searchValue: string;
    onClickType: OnClickTypeFunction;
    onClickField: OnClickFieldFunction;
};
export default class SearchResults extends React.Component<SearchResultsProps, {}> {
    shouldComponentUpdate(nextProps: SearchResultsProps): boolean;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=SearchResults.d.ts.map