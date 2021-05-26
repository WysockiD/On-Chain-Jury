import { GraphQLType } from 'graphql';
import { OnClickTypeFunction } from './types';
import { Maybe } from '../../types';
declare type TypeLinkProps = {
    type?: Maybe<GraphQLType>;
    onClick?: OnClickTypeFunction;
};
export default function TypeLink(props: TypeLinkProps): JSX.Element;
export {};
//# sourceMappingURL=TypeLink.d.ts.map