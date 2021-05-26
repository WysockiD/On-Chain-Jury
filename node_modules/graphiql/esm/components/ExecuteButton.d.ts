import React, { MouseEventHandler } from 'react';
import { OperationDefinitionNode } from 'graphql';
declare type ExecuteButtonProps = {
    operations?: OperationDefinitionNode[];
    isRunning: boolean;
    onStop: () => void;
    onRun: (value?: string) => void;
};
declare type ExecuteButtonState = {
    optionsOpen: boolean;
    highlight: OperationDefinitionNode | null;
};
export declare class ExecuteButton extends React.Component<ExecuteButtonProps, ExecuteButtonState> {
    constructor(props: ExecuteButtonProps);
    render(): JSX.Element;
    _onClick: () => void;
    _onOptionSelected: (operation: OperationDefinitionNode) => void;
    _onOptionsOpen: MouseEventHandler<HTMLButtonElement>;
}
export {};
//# sourceMappingURL=ExecuteButton.d.ts.map