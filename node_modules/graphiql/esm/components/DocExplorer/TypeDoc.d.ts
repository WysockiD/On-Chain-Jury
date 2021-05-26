import React from 'react';
import { GraphQLSchema, GraphQLType } from 'graphql';
import { OnClickTypeFunction, OnClickFieldFunction } from './types';
declare type TypeDocProps = {
    schema: GraphQLSchema;
    type: GraphQLType;
    onClickType: OnClickTypeFunction;
    onClickField: OnClickFieldFunction;
};
declare type TypeDocState = {
    showDeprecated: boolean;
};
export default class TypeDoc extends React.Component<TypeDocProps, TypeDocState> {
    constructor(props: TypeDocProps);
    shouldComponentUpdate(nextProps: TypeDocProps, nextState: TypeDocState): boolean;
    render(): JSX.Element;
    handleShowDeprecated: () => void;
}
export {};
//# sourceMappingURL=TypeDoc.d.ts.map