import React from "react";
import ImageSliderPropTypes from "./ImageSliderPropTypes";
import ImagePreLoader from "./ImageSliderPreLoader";
import { assignObjects } from "./ImageSliderUtil";
import data from "./ImageSliderData";
import styles from "./ImageSliderStyle";

class ImageSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            idx: 0,
            sliding: false,
            currentSlideStyle: styles.getImageSlide(this.getImageUrl(0), this.props.slideDuration, 0),
            nextSlideStyle: styles.getImageSlide(this.getImageUrl(1), this.props.slideDuration, this.props.width),
        };
        ImagePreLoader.load(this.getImageUrl(2));
    }

    getImageUrl = idx => (this.props.images[idx] ? this.props.images[idx].url : "");

    isCanSlide = idx => (idx !== this.state.idx && !this.state.sliding);

    callPropsFunc = (name, ...args) => {
        if (this.props[name]) {
            this.props[name](...args);
        }
    }

    onClickNav = (toRight) => {
        if (!this.isCanSlide(-1)) {
            return;
        }
        this.callPropsFunc("onClickNav", toRight);
        this.slide(toRight ? this.state.idx + 1 : this.state.idx - 1);
    }

    onClickBullets = (idx) => {
        if (!this.isCanSlide(idx)) {
            return;
        }

        this.callPropsFunc("onClickBullets", idx);
        this.slide(idx);
    }

    slide = (idx) => {
        const toNext = (idx > this.state.idx);
        const currentUrl = this.getImageUrl(this.state.idx);
        const nextUrl = this.getImageUrl(idx);
        const nextReadyX = toNext ? this.props.width : -this.props.width;
        const currentOffetX = toNext ? -this.props.width : this.props.width;

        // ready to animation slides
        this.setState({
            idx,
            sliding: true,
            currentSlideStyle: styles.getImageSlide(currentUrl, 0, 0, this.props.useGPURender),
            nextSlideStyle: styles.getImageSlide(nextUrl, 0, nextReadyX, this.props.useGPURender),
        }, () => {
            // animation slides
            setTimeout(() => {
                this.setState({
                    currentSlideStyle: styles.getImageSlide(currentUrl, this.props.slideDuration, currentOffetX, this.props.useGPURender),
                    nextSlideStyle: styles.getImageSlide(nextUrl, this.props.slideDuration, 0, this.props.useGPURender),
                });
            }, 50);

            ImagePreLoader.load(this.getImageUrl(idx + 2));
        });

        this.callPropsFunc("onStartSlide", (idx + 1), this.props.images.length);
    }

    onSlideEnd = () => {
        // console.log(`[ImageSlider] onSlideEnd idx:${this.state.idx}`);
        const currentUrl = this.getImageUrl(this.state.idx);
        // const nextUrl = this.getImageUrl(this.state.idx + 1);

        this.setState({
            currentSlideStyle: styles.getImageSlide(currentUrl, 0, 0, this.props.useGPURender),
            // nextSlideStyle: styles.getImageSlide(nextUrl, 0, this.props.width, this.props.useGPURender),
            sliding: false,
        });

        this.callPropsFunc("onCompleteSlide", (this.state.idx + 1), this.props.images.length);
    }

    isRenderLeftNav = (length, idx) => (length > 0 && idx > 0);

    isRenderRightNav = (length, idx) => (length > 0 && idx < length - 1);

    renderNav = (length, idx) => ({
        left: this.isRenderLeftNav(length, idx) ? (
            <button type="button" style={styles.NavLeft} onClick={this.onClickNav.bind(this, false)}>
                <img src={data[`ImageNavArrowLeft${this.props.navStyle}`]} alt={data.AltNavArrowLeft} />
            </button>
        ) : null,
        right: this.isRenderRightNav(length, idx) ? (
            <button type="button" style={styles.NavRight} onClick={this.onClickNav.bind(this, true)}>
                <img src={data[`ImageNavArrowRight${this.props.navStyle}`]} alt={data.AltNavArrowRight} />
            </button>
        ) : null,
    })

    renderBullets = (length, idx) => {
        if (length > 1) {
            const bulletList = Array.from({ length }).map((e, i) => (
                <button
                    type="button"
                    className={data.ClassNameBullets}
                    style={(i === idx) ? styles.BulletActive : styles.BulletNormal}
                    key={`bullet-${i + 1}`}
                    onClick={this.onClickBullets.bind(this, i)}
                />
            ));
            return (
                <div style={styles.BulletContainer(length)}>
                    {bulletList}
                </div>
            );
        }
        return null;
    }

    renderSlide = length => (
        <div style={styles.ImageSlider}>
            <div style={this.state.currentSlideStyle} onTransitionEnd={this.onSlideEnd} />
            <div style={this.state.nextSlideStyle} />
        </div>
    )

    render() {
        const rootStyle = styles.getRootContainer(this.props.width, this.props.height, this.props.bgColor);
        const imageLength = this.props.images.length;
        const leftNav = this.props.showNavs ? this.renderNav(imageLength, this.state.idx).left : null;
        const rightNav = this.props.showNavs ? this.renderNav(imageLength, this.state.idx).right : null;
        const bullets = this.props.showBullets ? this.renderBullets(imageLength, this.state.idx) : null;
        
        return (
            <div className={data.ClassNameRoot} style={assignObjects(rootStyle, this.props.style)}>
                <div style={styles.getSubContainer(this.props.width, this.props.height)}>
                    {this.renderSlide(imageLength)}
                    {leftNav}
                    {rightNav}
                    {bullets}
                </div>
            </div>
        );
    }
}

ImageSlider.propTypes = ImageSliderPropTypes.propTypes;
ImageSlider.defaultProps = ImageSliderPropTypes.defaultTypes;

export default ImageSlider;
