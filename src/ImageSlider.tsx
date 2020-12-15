import React from "react";
import ImagePreLoader from "./ImageSliderPreLoader";
import styles from "./ImageSliderStyle";
import ImageSliderNavigation, { ImageSliderNavDirection, ImageSliderNavStyle } from './ImageSliderNavigation';
import { getValue } from './helpers'

export type SimpleImageSliderProps = {
  width: number | string;
  height: number | string;
  images: Array<Record<string, unknown>>;
  imgUrlAccessor: string;
  style?: React.CSSProperties;
  showNavs: boolean;
  showBullets: boolean;
  slideDuration?: number;
  bgColor?: string;
  useGPURender?: boolean;
  navStyle?: ImageSliderNavStyle;
  onClick?: (idx: number, event: React.SyntheticEvent) => void;
  onClickNav?: (toRight: boolean) => void;
  onClickBullets?: (idx: number) => void;
  onStartSlide?: (idx: number, length: number) => void;
  onCompleteSlide?: (idx: number, length: number) => void;
};

const SimpleImageSlider: React.FC<SimpleImageSliderProps> = ({
  width,
  height,
  images,
  imgUrlAccessor = "url",
  showNavs,
  showBullets,
  style = undefined,
  slideDuration = 0.5,
  bgColor = '#000',
  useGPURender = true,
  navStyle = ImageSliderNavStyle.NORMAL,
  onClick = undefined,
  onClickNav = undefined,
  onClickBullets = undefined,
  onStartSlide = undefined,
  onCompleteSlide = undefined,
}: SimpleImageSliderProps) => {
  const rootStyle: React.CSSProperties = React.useMemo(() => (styles.getRootContainer(width, height, bgColor)), [width, height, bgColor]);
  const [slideIdx, setSlideIdx] = React.useState(0);
  const [slideDirection, setSlideDirection] = React.useState(ImageSliderNavDirection.RIGHT);
  const [isSliding, setIsSliding] = React.useState(false);
  const [currentSliderStyle, setCurrentSlideStyle] = React.useState(styles.getImageSlide(getValue(images[0], imgUrlAccessor), slideDuration, 0, useGPURender));
  const [nextSliderStyle, setNextSliderStyle] = React.useState(styles.getImageSlide(getValue(images[1], imgUrlAccessor), slideDuration, 1, useGPURender));

  const handleClick = React.useCallback((event: React.SyntheticEvent) => {
    onClick && onClick(slideIdx, event);
  }, [slideIdx]);

  const handleClickNav = React.useCallback((direction: ImageSliderNavDirection) => () => {
    if (isSliding) {
      return;
    }

    onClickNav && onClickNav(true);
    slide(direction === ImageSliderNavDirection.RIGHT ? slideIdx + 1 : slideIdx - 1);
  }, [slideIdx, isSliding]);

  const handleClickBullets = React.useCallback((idx: number) => () => {
    console.log(idx , slideIdx, isSliding);
    if (idx === slideIdx || isSliding) {
      return;
    }

    onClickBullets && onClickBullets(idx);
    slide(idx);
  }, [slideIdx, isSliding]);

  const slide = (idx: number) => {
    const toNext: boolean = idx > slideIdx;
    const currentUrl: string = getValue(images[slideIdx], imgUrlAccessor);
    const nextUrl: string = getValue(images[idx], imgUrlAccessor);
    const nextReadyX: 1 | -1 = toNext ? 1 : -1;

    setSlideIdx(idx);
    setSlideDirection(idx > slideIdx ? ImageSliderNavDirection.RIGHT : ImageSliderNavDirection.LEFT);
    setCurrentSlideStyle(styles.getImageSlide(currentUrl, 0, 0, useGPURender));
    setNextSliderStyle(styles.getImageSlide(nextUrl, 0, nextReadyX, useGPURender));
    setIsSliding(true);

    onStartSlide && onStartSlide(idx + 1, images.length);
    idx + 2 < images.length && ImagePreLoader.load(getValue(images[idx + 2], imgUrlAccessor));
  };

  React.useEffect(() => {
    if (isSliding) {
      setTimeout(() => {
        const toRight: boolean = slideDirection === ImageSliderNavDirection.RIGHT;
        const currentUrl: string = getValue(images[toRight ? slideIdx - 1 : slideIdx + 1], imgUrlAccessor);
        const nextUrl: string = getValue(images[slideIdx], imgUrlAccessor);
        const currentOffetX: 1 | -1 = toRight ? -1 : 1;

        setCurrentSlideStyle(styles.getImageSlide(currentUrl, slideDuration, currentOffetX, useGPURender));
        setNextSliderStyle(styles.getImageSlide(nextUrl, slideDuration, 0, useGPURender));
      }, 50);
    }
  }, [slideIdx, isSliding]);

  const handleSlideEnd = React.useCallback(() => {
    setCurrentSlideStyle(styles.getImageSlide(getValue(images[slideIdx], imgUrlAccessor), 0, 0, useGPURender));
    setIsSliding(false);
    onCompleteSlide && onCompleteSlide(slideIdx + 1, images.length);
  }, [slideIdx]);

  return (
    <div style={{ ...rootStyle, ...style }}>
      <div style={styles.getSubContainer(width, height)}>
        {/* Render Slider */}
        <div style={styles.ImageSlider} onClick={handleClick}>
          <div style={currentSliderStyle} onTransitionEnd={handleSlideEnd}/>
          <div style={nextSliderStyle}/>
        </div>

        {/* Render Navigation */}
        {showNavs && images.length > 0 && slideIdx > 0 && (
          <ImageSliderNavigation
            direction={ImageSliderNavDirection.LEFT}
            navStyle={navStyle}
            onClickNav={handleClickNav}
          />
        )}
        {showNavs && images.length > 0 && slideIdx < images.length - 1 && (
          <ImageSliderNavigation
            direction={ImageSliderNavDirection.RIGHT}
            navStyle={navStyle}
            onClickNav={handleClickNav}
          />
        )}

        {/* Render Bullets */}
        {showBullets && images.length > 0 && (
          <div style={styles.getBulletContainer(images.length)}>
            {Array.from(Array(images.length).keys()).map((e) => (
              <button
                key={`bullet-${e}`}
                type="button"
                data-id={`bullet-${e}`}
                style={e === slideIdx ? styles.BulletActive : styles.BulletNormal}
                onClick={handleClickBullets(e)}
              />))
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleImageSlider;
