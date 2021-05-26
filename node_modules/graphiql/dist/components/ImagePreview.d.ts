import React from 'react';
import PropTypes from 'prop-types';
declare type ImagePreviewProps = {
    token: any;
};
declare type ImagePreviewState = {
    width: number | null;
    height: number | null;
    src: string | null;
    mime: string | null;
};
export declare class ImagePreview extends React.Component<ImagePreviewProps, ImagePreviewState> {
    _node: HTMLImageElement | null;
    static shouldRender(token: any): boolean;
    static propTypes: {
        token: PropTypes.Requireable<any>;
    };
    state: {
        width: null;
        height: null;
        src: null;
        mime: null;
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
    _updateMetadata(): void;
}
export {};
//# sourceMappingURL=ImagePreview.d.ts.map