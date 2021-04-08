import { ImageSliderNavDirection } from './ImageSliderNavigation';

const basic = {
  display: 'block',
  margin: '0',
  padding: '0',
  border: '0'
};
const basicRootContainer = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
};
const basicSlide = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  backgroundSize: 'cover'
};
const basicNav = {
  position: 'absolute',
  top: '50%',
  cursor: 'pointer',
  outline: 'none',
  background: 'none'
};
const bulletContainer = {
  position: 'absolute',
  left: '50%',
  bottom: '15px'
};
const bulletSize = 15;
const bulletMargin = 3;
const basicBullet = {
  display: 'inline-block',
  cursor: 'pointer',
  outline: 'none',
  background: 'none',
  boxShadow: '1px 1px 1px 0px #1a1a1a',
  borderRadius: '50%',
  border: '1px solid #FFFFFF',
  width: `${bulletSize}px`,
  height: `${bulletSize}px`,
  marginLeft: `${bulletMargin}px`,
  marginRight: `${bulletMargin}px`
};

export default {
  ImageSlider: { ...basic, ...basicRootContainer } as React.CSSProperties,
  ImageSlideCurrent: { ...basicSlide, overflow: 'hidden' } as React.CSSProperties,
  ImageSlideNext: { ...basicSlide, overflow: 'hidden' } as React.CSSProperties,
  NavLeft: { ...basic, ...basicNav, left: '30px', marginTop: '-25px' } as React.CSSProperties,
  NavRight: { ...basic, ...basicNav, right: '30px', marginTop: '-25px' } as React.CSSProperties,
  BulletNormal: { ...basic, ...basicBullet } as React.CSSProperties,
  BulletActive: { ...basic, ...basicBullet, background: '#FFF' } as React.CSSProperties,

  getRootContainer: (width: number | string, height: number | string, backgroundColor: string): React.CSSProperties =>
    ({ ...basic, overflow: 'hidden', width, height, backgroundColor } as React.CSSProperties),
  getSubContainer: (width: number | string, height: number | string): React.CSSProperties =>
    ({ ...basic, position: 'absolute', overflow: 'hidden', width, height } as React.CSSProperties),
  getBulletContainer: (bulletLength: number): React.CSSProperties =>
    ({ ...basic, ...bulletContainer, marginLeft: `-${(bulletLength * (bulletSize + bulletMargin * 2)) / 2}px` } as React.CSSProperties),
  getImageSlide: (url: string, duration: number, idx: number, isGpuRender: boolean): React.CSSProperties =>
    ({
      ...basicSlide,
      overflow: 'hidden',
      transition: `${duration}s`,
      backgroundImage: `url(${url})`,
      transform: isGpuRender ? `translate3d(${idx * 100}%, 0px, 0px)` : `translate(${idx * 100}%, 0px)`
    } as React.CSSProperties),
  getNavStyle: (direction: ImageSliderNavDirection, size: number, margin: number): React.CSSProperties =>
    ({
      ...basic,
      ...basicNav,
      ...(direction === ImageSliderNavDirection.LEFT ? { left: `${margin}px` } : { right: `${margin}px` }),
      marginTop: `-${Math.floor(size / 2)}px`,
      width: `${size}px`
    } as React.CSSProperties)
};
