import { GraphQLSchema } from 'graphql';
import { OnClickTypeFunction } from './types';
declare type SchemaDocProps = {
    schema: GraphQLSchema;
    onClickType: OnClickTypeFunction;
};
export default function SchemaDoc({ schema, onClickType }: SchemaDocProps): JSX.Element;
export {};
//# sourceMappingURL=SchemaDoc.d.ts.map