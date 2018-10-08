import * as React from "react";

// RSIS = React Simple Image Slider
export interface RSISImage {
    url: string;
}

export interface RSISProps {
    width: number;
    height: number;
    images: RSISImage[],

    style?: CSSStyleDeclaration,
    slideDuration?: number;
    showNavs?: boolean;
    showBullets?: boolean;
    bgColor?: string;
    useGPURender?: boolean;
    navStyle?: 1 | 2;
    onClickNav?: (toRight: boolean) => void;
    onClickBullets?: (idx: number) => void;
    onStartSlide?: (current: number, length: number) => void;
    onCompleteSlide?: (current: number, length: number) => void;
}

declare class ReactSimpleImageSlider extends React.Component<RSISProps> {
    
}

export default ReactSimpleImageSlider;