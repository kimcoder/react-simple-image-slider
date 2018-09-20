import { assignObjects } from "./ImageSliderUtil";

const basic = {
    display: "block",
    margin: "0",
    padding: "0",
    border: "0",
};
const basicRootContainer = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
};
const basicSlide = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
};
const basicNav = {
    position: "absolute",
    top: "50%",
    cursor: "pointer",
    outline: "none",
    background: "none",
};
const bulletContainer = {
    position: "absolute",
    left: "50%",
    bottom: "15px",
};
const bulletSize = 15;
const bulletMargin = 3;
const basicBullet = {
    display: "inline-block",
    cursor: "pointer",
    outline: "none",
    background: "none",
    boxShadow: "1px 1px 1px 0px #1a1a1a",
    borderRadius: "50%",
    border: "1px solid #FFFFFF",
    width: `${bulletSize}px`,
    height: `${bulletSize}px`,
    marginLeft: `${bulletMargin}px`,
    marginRight: `${bulletMargin}px`,
};

export default {
    ImageSlider: assignObjects(basic, basicRootContainer),
    ImageSlideCurrent: assignObjects(basicSlide, { overflow: "hidden" }),
    ImageSlideNext: assignObjects(basicSlide, { overflow: "hidden" }),
    NavLeft: assignObjects(basic, basicNav, { left: "30px", marginTop: "-25px" }),
    NavRight: assignObjects(basic, basicNav, { right: "30px", marginTop: "-25px" }),
    BulletContainer: bulletLength => assignObjects(basic, bulletContainer, { marginLeft: `-${bulletLength * (bulletSize + bulletMargin * 2) / 2}px` }),
    BulletNormal: assignObjects(basic, basicBullet),
    BulletActive: assignObjects(basic, basicBullet, { background: "#FFFFFF" }),

    // methods
    getRootContainer: (width, height, bgColor) => assignObjects(basic, {
        overflow: "hidden",
        width,
        height,
        background: bgColor,
    }),
    getSubContainer: (width, height) => assignObjects(basic, {
        position: "absolute",
        overflow: "hidden",
        width,
        height,
    }),
    getImageSlide: (url, duration, x, isGpuRender) => assignObjects(basicSlide, {
        overflow: "hidden",
        transition: `${duration}s`,
        backgroundImage: `url(${url})`,
        transform: isGpuRender ? `translate3d(${x}px, 0px, 0px)` : `translate(${x}px, 0px)`,
    }),
};
