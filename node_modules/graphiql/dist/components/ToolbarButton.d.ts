import React from 'react';
declare type ToolbarButtonProps = {
    onClick: () => void;
    title: string;
    label: string;
};
declare type ToolbarButtonState = {
    error: Error | null;
};
export declare class ToolbarButton extends React.Component<ToolbarButtonProps, ToolbarButtonState> {
    constructor(props: ToolbarButtonProps);
    render(): JSX.Element;
    handleClick: () => void;
}
export {};
//# sourceMappingURL=ToolbarButton.d.ts.map