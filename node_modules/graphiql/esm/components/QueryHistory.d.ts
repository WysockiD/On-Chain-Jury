import React from 'react';
import QueryStore, { QueryStoreItem } from '../utility/QueryStore';
import { HandleEditLabelFn, HandleToggleFavoriteFn, HandleSelectQueryFn } from './HistoryQuery';
import StorageAPI from '../utility/StorageAPI';
declare type QueryHistoryProps = {
    query?: string;
    variables?: string;
    headers?: string;
    operationName?: string;
    queryID?: number;
    onSelectQuery: HandleSelectQueryFn;
    storage: StorageAPI;
};
declare type QueryHistoryState = {
    queries: Array<QueryStoreItem>;
};
export declare class QueryHistory extends React.Component<QueryHistoryProps, QueryHistoryState> {
    historyStore: QueryStore;
    favoriteStore: QueryStore;
    constructor(props: QueryHistoryProps);
    render(): JSX.Element;
    updateHistory: (query?: string | undefined, variables?: string | undefined, headers?: string | undefined, operationName?: string | undefined) => void;
    toggleFavorite: HandleToggleFavoriteFn;
    editLabel: HandleEditLabelFn;
}
export {};
//# sourceMappingURL=QueryHistory.d.ts.map