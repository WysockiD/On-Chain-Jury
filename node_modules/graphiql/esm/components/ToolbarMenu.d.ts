import React, { FC, MouseEventHandler } from 'react';
declare type ToolbarMenuProps = {
    title: string;
    label: string;
};
declare type ToolbarMenuState = {
    visible: boolean;
};
export declare class ToolbarMenu extends React.Component<ToolbarMenuProps, ToolbarMenuState> {
    private _node;
    private _listener;
    constructor(props: ToolbarMenuProps);
    componentWillUnmount(): void;
    render(): JSX.Element;
    _subscribe(): void;
    _release(): void;
    handleClick(e: MouseEvent | React.MouseEvent<HTMLAnchorElement>): void;
    handleOpen: MouseEventHandler<HTMLAnchorElement>;
}
declare type ToolbarMenuItemProps = {
    onSelect: () => void;
    title: string;
    label: string;
};
export declare const ToolbarMenuItem: FC<ToolbarMenuItemProps>;
export {};
//# sourceMappingURL=ToolbarMenu.d.ts.map