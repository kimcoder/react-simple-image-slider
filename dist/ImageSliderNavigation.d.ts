import React from 'react';
export declare enum ImageSliderNavStyle {
    NORMAL = 1,
    BOLD = 2
}
export declare enum ImageSliderNavDirection {
    LEFT = "left",
    RIGHT = "right"
}
declare type ImageSliderNavigationProps = {
    type: ImageSliderNavStyle;
    size: number;
    margin: number;
    direction: ImageSliderNavDirection;
    visible: boolean;
    onClickNav: (direction: ImageSliderNavDirection) => (event: React.SyntheticEvent<HTMLButtonElement>) => void;
};
declare const ImageSliderNavigation: React.FC<ImageSliderNavigationProps>;
export default ImageSliderNavigation;
