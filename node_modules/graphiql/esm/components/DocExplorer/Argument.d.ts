import { GraphQLArgument } from 'graphql';
import { OnClickTypeFunction } from './types';
declare type ArgumentProps = {
    arg: GraphQLArgument;
    onClickType: OnClickTypeFunction;
    showDefaultValue?: boolean;
};
export default function Argument({ arg, onClickType, showDefaultValue, }: ArgumentProps): JSX.Element;
export {};
//# sourceMappingURL=Argument.d.ts.map