import { GraphQLSchema, DocumentNode, OperationDefinitionNode, GraphQLNamedType } from 'graphql';
export declare type VariableToType = {
    [variable: string]: GraphQLNamedType;
};
export declare type QueryFacts = {
    variableToType?: VariableToType;
    operations?: OperationDefinitionNode[];
};
export default function getQueryFacts(schema?: GraphQLSchema, documentStr?: string | null): QueryFacts | undefined;
export declare function collectVariables(schema: GraphQLSchema, documentAST: DocumentNode): VariableToType;
//# sourceMappingURL=getQueryFacts.d.ts.map