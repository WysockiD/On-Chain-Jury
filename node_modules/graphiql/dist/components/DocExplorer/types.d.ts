import { MouseEvent } from 'react';
import { GraphQLField, GraphQLInputField, GraphQLArgument, GraphQLObjectType, GraphQLInterfaceType, GraphQLInputObjectType, GraphQLType, GraphQLNamedType } from 'graphql';
export declare type FieldType = GraphQLField<{}, {}, {}> | GraphQLInputField | GraphQLArgument;
export declare type OnClickFieldFunction = (field: FieldType, type?: GraphQLObjectType | GraphQLInterfaceType | GraphQLInputObjectType | GraphQLType, event?: MouseEvent) => void;
export declare type OnClickTypeFunction = (type: GraphQLNamedType, event?: MouseEvent<HTMLAnchorElement>) => void;
export declare type OnClickFieldOrTypeFunction = OnClickFieldFunction | OnClickTypeFunction;
//# sourceMappingURL=types.d.ts.map