import React from 'react';
import styles from './ImageSliderStyle';
import ImageNavArrowBold from './images/arrow-bold.svg';
import ImageNavArrowNormal from './images/arrow-normal.svg';

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
  navSize: number;
  navMargin: number;
  direction: ImageSliderNavDirection;
  onClickNav: (direction: ImageSliderNavDirection) => (event: React.SyntheticEvent<HTMLButtonElement>) => void;
};

const altNavArrowLeft = 'slide to left';
const altNavArrowRight = 'slide to right';

const ImageSliderNavigation: React.FC<ImageSliderNavigationProps> = (props: ImageSliderNavigationProps) => {
  return (
    <button type="button" style={styles.getNavStyle(props.direction, props.navSize, props.navMargin)} onClick={props.onClickNav(props.direction)}>
      <img
        src={props.navStyle === ImageSliderNavStyle.NORMAL ? ImageNavArrowNormal : ImageNavArrowBold}
        style={{ width: '100%', ...(props.direction === ImageSliderNavDirection.RIGHT && { transform: 'rotate(180deg)' }) }}
        alt={props.direction === ImageSliderNavDirection.LEFT ? altNavArrowLeft : altNavArrowRight}
      />
    </button>
  );
};

export default ImageSliderNavigation;
