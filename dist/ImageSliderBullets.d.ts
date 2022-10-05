import React from 'react';
declare type Props = {
    visible: boolean;
    length: number;
    currentIdx: number;
    bulletColor: string;
    onClickBullets: (idx: number) => void;
};
declare const ImageSliderBullets: React.FC<Props>;
export default ImageSliderBullets;
