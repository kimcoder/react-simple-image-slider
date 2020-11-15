import React from "react";
import styles from "./ImageSliderStyle";
import ImageNavArrowLeft1 from "./images/arrow-left-1.png";
import ImageNavArrowLeft2 from "./images/arrow-left-2.png";
import ImageNavArrowRight1 from "./images/arrow-right-1.png";
import ImageNavArrowRight2 from "./images/arrow-right-2.png";

export enum ImageSliderNavStyle {
  NORMAL = 1,
  BOLD = 2
}

export enum ImageSliderNavDirection {
  LEFT = 'left',
  RIGHT = 'right'
}

type ImageSliderNavigationProps = {
  navStyle: ImageSliderNavStyle;
  direction: ImageSliderNavDirection;
  onClickNav: (direction: ImageSliderNavDirection) => (event: React.SyntheticEvent<HTMLButtonElement>) => void;
};

const altNavArrowLeft = "slide to left";
const altNavArrowRight = "slide to right";
const images: { [key: string]: string } = {
  [`image-${ImageSliderNavDirection.LEFT}-${ImageSliderNavStyle.NORMAL}`]: ImageNavArrowLeft1,
  [`image-${ImageSliderNavDirection.RIGHT}-${ImageSliderNavStyle.NORMAL}`]: ImageNavArrowRight1,
  [`image-${ImageSliderNavDirection.LEFT}-${ImageSliderNavStyle.BOLD}`]: ImageNavArrowLeft2,
  [`image-${ImageSliderNavDirection.RIGHT}-${ImageSliderNavStyle.BOLD}`]: ImageNavArrowRight2
};

const ImageSliderNavigation: React.FC<ImageSliderNavigationProps> = (props: ImageSliderNavigationProps) => {
  return (
    <button
      type="button"
      style={props.direction === ImageSliderNavDirection.LEFT ? styles.NavLeft : styles.NavRight}
      onClick={props.onClickNav(props.direction)}
    >
      <img
        src={images[`image-${props.direction}-${props.navStyle}`]}
        alt={props.direction === ImageSliderNavDirection.LEFT ? altNavArrowLeft : altNavArrowRight}
      />
    </button>
  )
};

export default ImageSliderNavigation;