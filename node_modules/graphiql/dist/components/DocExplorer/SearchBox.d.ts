import React, { ChangeEventHandler } from 'react';
declare type OnSearchFn = (value: string) => void;
declare type SearchBoxProps = {
    value?: string;
    placeholder: string;
    onSearch: OnSearchFn;
};
declare type SearchBoxState = {
    value: string;
};
export default class SearchBox extends React.Component<SearchBoxProps, SearchBoxState> {
    debouncedOnSearch: OnSearchFn;
    constructor(props: SearchBoxProps);
    render(): JSX.Element;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    handleClear: () => void;
}
export {};
//# sourceMappingURL=SearchBox.d.ts.map