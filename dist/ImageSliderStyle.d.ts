/// <reference types="react" />
import { ImageSliderNavDirection } from './ImageSliderNavigation';
declare const _default: {
    ImageSlider: import("react").CSSProperties;
    ImageSlideCurrent: import("react").CSSProperties;
    ImageSlideNext: import("react").CSSProperties;
    NavLeft: import("react").CSSProperties;
    NavRight: import("react").CSSProperties;
    BulletNormal: import("react").CSSProperties;
    BulletActive: import("react").CSSProperties;
    getRootContainer: (width: number | string, height: number | string, backgroundColor: string) => React.CSSProperties;
    getSubContainer: (width: number | string, height: number | string) => React.CSSProperties;
    getBulletContainer: (bulletLength: number) => React.CSSProperties;
    getImageSlide: (url: string, duration: number, idx: number, isGpuRender: boolean) => React.CSSProperties;
    getNavStyle: (direction: ImageSliderNavDirection, size: number, margin: number) => React.CSSProperties;
};
export default _default;
