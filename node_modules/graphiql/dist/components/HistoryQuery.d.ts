import React from 'react';
import { QueryStoreItem } from '../utility/QueryStore';
export declare type HandleEditLabelFn = (query?: string, variables?: string, headers?: string, operationName?: string, label?: string, favorite?: boolean) => void;
export declare type HandleToggleFavoriteFn = (query?: string, variables?: string, headers?: string, operationName?: string, label?: string, favorite?: boolean) => void;
export declare type HandleSelectQueryFn = (query?: string, variables?: string, headers?: string, operationName?: string, label?: string) => void;
export declare type HistoryQueryProps = {
    favorite?: boolean;
    favoriteSize?: number;
    handleEditLabel: HandleEditLabelFn;
    handleToggleFavorite: HandleToggleFavoriteFn;
    operationName?: string;
    onSelect: HandleSelectQueryFn;
} & QueryStoreItem;
export default class HistoryQuery extends React.Component<HistoryQueryProps, {
    editable: boolean;
}> {
    editField: HTMLInputElement | null;
    constructor(props: HistoryQueryProps);
    render(): JSX.Element;
    handleClick(): void;
    handleStarClick(e: React.MouseEvent<HTMLButtonElement>): void;
    handleFieldBlur(e: React.FocusEvent<HTMLInputElement>): void;
    handleFieldKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void;
    handleEditClick(e: React.MouseEvent<HTMLButtonElement>): void;
}
//# sourceMappingURL=HistoryQuery.d.ts.map