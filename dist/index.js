'use strict';

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = require('react');

function _interopDefaultLegacy(e) {
  return e && _typeof(e) === 'object' && 'default' in e ? e : {
    'default': e
  };
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var ImageSliderPreLoader = function () {
  var loadedUrl = {};
  var loadQueue = [];
  var loaderCount = 3;
  var loaderPool;

  var init = function init() {
    if (typeof Image !== 'function') return;
    loaderPool = new Array(loaderCount).fill(0).map(function () {
      return new Image();
    });
  };

  init();
  return {
    load: function load(url) {
      if (!loaderPool) {
        init();
        return;
      }

      if (!url || loadedUrl[url]) {
        return;
      }

      if (loaderPool.length === 0) {
        loadQueue.push(url);
      } else {
        var imageLoader = loaderPool.shift();
        imageLoader.src = url;

        imageLoader.onload = function () {
          loadedUrl[url] = true;

          if (loadQueue.length > 0) {
            imageLoader.src = loadQueue.shift();
          } else {
            loaderPool.push(imageLoader);
          }
        };
      }
    }
  };
}();

var img$1 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3e %3cdefs%3e %3cfilter id='0ls8o9a99a' width='168.9%25' height='218.6%25' x='-34.5%25' y='-59.3%25' filterUnits='objectBoundingBox'%3e %3cfeOffset in='SourceAlpha' result='shadowOffsetOuter1'/%3e %3cfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3e %3cfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0'/%3e %3c/filter%3e %3cpath id='rs87bry78b' d='M19 7L20.413 8.414 11.707 17.12 2.999 8.414 4.413 7 11.707 14.291z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg%3e %3cg%3e %3cg transform='translate(-24 -27) translate(24 27) rotate(90 11.707 12.06)'%3e %3cuse fill='black' filter='url(%230ls8o9a99a)' xlink:href='%23rs87bry78b'/%3e %3cuse fill='white' xlink:href='%23rs87bry78b'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e";
var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3e %3cdefs%3e %3cfilter id='8utpkffr2a' width='171.8%25' height='232.4%25' x='-35.9%25' y='-66.2%25' filterUnits='objectBoundingBox'%3e %3cfeOffset in='SourceAlpha' result='shadowOffsetOuter1'/%3e %3cfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3e %3cfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0'/%3e %3c/filter%3e %3cpath id='6inzdknobb' d='M20 6.999L20.707 7.706 12.354 16.06 4 7.706 4.707 6.999 12.354 14.646z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg%3e %3cg%3e %3cg transform='translate(-67 -27) translate(67 27) rotate(90 12.354 11.53)'%3e %3cuse fill='black' filter='url(%238utpkffr2a)' xlink:href='%236inzdknobb'/%3e %3cuse fill='white' xlink:href='%236inzdknobb'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e";
var ImageSliderNavStyle;

(function (ImageSliderNavStyle) {
  ImageSliderNavStyle[ImageSliderNavStyle["NORMAL"] = 1] = "NORMAL";
  ImageSliderNavStyle[ImageSliderNavStyle["BOLD"] = 2] = "BOLD";
})(ImageSliderNavStyle || (ImageSliderNavStyle = {}));

var ImageSliderNavDirection;

(function (ImageSliderNavDirection) {
  ImageSliderNavDirection["LEFT"] = "left";
  ImageSliderNavDirection["RIGHT"] = "right";
})(ImageSliderNavDirection || (ImageSliderNavDirection = {}));

var altNavArrowLeft = 'slide to left';
var altNavArrowRight = 'slide to right';

var ImageSliderNavigation = function ImageSliderNavigation(props) {
  return React__default['default'].createElement(React__default['default'].Fragment, null, props.visible && React__default['default'].createElement("button", {
    type: "button",
    style: styles.getNavStyle(props.direction, props.size, props.margin),
    onClick: props.onClickNav(props.direction)
  }, React__default['default'].createElement("img", {
    src: props.type === ImageSliderNavStyle.NORMAL ? img : img$1,
    style: _objectSpread({
      width: '100%'
    }, props.direction === ImageSliderNavDirection.RIGHT && {
      transform: 'rotate(180deg)'
    }),
    alt: props.direction === ImageSliderNavDirection.LEFT ? altNavArrowLeft : altNavArrowRight
  })));
};

var basic = {
  display: 'block',
  margin: '0',
  padding: '0',
  border: '0'
};
var basicRootContainer = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
};
var basicSlide = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  backgroundSize: 'cover'
};
var basicNav = {
  position: 'absolute',
  top: '50%',
  cursor: 'pointer',
  outline: 'none',
  background: 'none'
};
var bulletContainer = {
  position: 'absolute',
  left: '50%',
  bottom: '15px'
};
var bulletSize = 15;
var bulletMargin = 3;
var basicBullet = {
  display: 'inline-block',
  cursor: 'pointer',
  outline: 'none',
  background: 'none',
  boxShadow: '1px 1px 1px 0px #1a1a1a',
  borderRadius: '50%',
  border: '1px solid #FFFFFF',
  width: "".concat(bulletSize, "px"),
  height: "".concat(bulletSize, "px"),
  marginLeft: "".concat(bulletMargin, "px"),
  marginRight: "".concat(bulletMargin, "px")
};
var styles = {
  ImageSlider: _objectSpread(_objectSpread({}, basic), basicRootContainer),
  ImageSlideCurrent: _objectSpread(_objectSpread({}, basicSlide), {}, {
    overflow: 'hidden'
  }),
  ImageSlideNext: _objectSpread(_objectSpread({}, basicSlide), {}, {
    overflow: 'hidden'
  }),
  NavLeft: _objectSpread(_objectSpread(_objectSpread({}, basic), basicNav), {}, {
    left: '30px',
    marginTop: '-25px'
  }),
  NavRight: _objectSpread(_objectSpread(_objectSpread({}, basic), basicNav), {}, {
    right: '30px',
    marginTop: '-25px'
  }),
  BulletNormal: _objectSpread(_objectSpread({}, basic), basicBullet),
  BulletActive: _objectSpread(_objectSpread(_objectSpread({}, basic), basicBullet), {}, {
    background: '#FFF'
  }),
  getRootContainer: function getRootContainer(width, height, backgroundColor) {
    return _objectSpread(_objectSpread({}, basic), {}, {
      overflow: 'hidden',
      width: width,
      height: height,
      backgroundColor: backgroundColor
    });
  },
  getSubContainer: function getSubContainer(width, height) {
    return _objectSpread(_objectSpread({}, basic), {}, {
      position: 'absolute',
      overflow: 'hidden',
      width: width,
      height: height
    });
  },
  getBulletContainer: function getBulletContainer(bulletLength) {
    return _objectSpread(_objectSpread(_objectSpread({}, basic), bulletContainer), {}, {
      marginLeft: "-".concat(bulletLength * (bulletSize + bulletMargin * 2) / 2, "px")
    });
  },
  getImageSlide: function getImageSlide(url, duration, idx, isGpuRender) {
    return _objectSpread(_objectSpread({}, basicSlide), {}, {
      overflow: 'hidden',
      transition: "".concat(duration, "s"),
      backgroundImage: "url(".concat(url, ")"),
      transform: isGpuRender ? "translate3d(".concat(idx * 100, "%, 0px, 0px)") : "translate(".concat(idx * 100, "%, 0px)")
    });
  },
  getNavStyle: function getNavStyle(direction, size, margin) {
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, basic), basicNav), direction === ImageSliderNavDirection.LEFT ? {
      left: "".concat(margin, "px")
    } : {
      right: "".concat(margin, "px")
    }), {}, {
      marginTop: "-".concat(Math.floor(size / 2), "px"),
      width: "".concat(size, "px")
    });
  }
};

var ImageSliderBullets = function ImageSliderBullets(_ref) {
  var visible = _ref.visible,
      length = _ref.length,
      currentIdx = _ref.currentIdx,
      bulletColor = _ref.bulletColor,
      onClickBullets = _ref.onClickBullets;
  return React__default['default'].createElement(React__default['default'].Fragment, null, visible && length > 0 && React__default['default'].createElement("div", {
    style: styles.getBulletContainer(length)
  }, Array.from(Array(length).keys()).map(function (idx) {
    return React__default['default'].createElement("button", {
      key: "bullet-".concat(idx),
      type: "button",
      "data-id": "bullet-".concat(idx),
      style: idx === currentIdx ? _objectSpread(_objectSpread({}, styles.BulletActive), {}, {
        background: bulletColor
      }) : styles.BulletNormal,
      onClick: function onClick() {
        return onClickBullets(idx);
      }
    });
  })));
};

var useSlideIndex = function useSlideIndex(_ref2) {
  var startIndex = _ref2.startIndex,
      imageCount = _ref2.imageCount,
      autoPlay = _ref2.autoPlay,
      autoPlayDelay = _ref2.autoPlayDelay;

  var _React$useState = React.useState(startIndex < imageCount ? startIndex : 0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      slideIdx = _React$useState2[0],
      setSlideIdx = _React$useState2[1];

  var isRightDirectionRef = React.useRef(true);
  var previousSlideIdxRef = React.useRef(slideIdx);
  var autoPlayTimerRef = React.useRef(null);

  var setAutoPlayTimeout = function setAutoPlayTimeout(idx) {
    if (!autoPlay || autoPlayTimerRef.current) {
      return;
    }

    autoPlayTimerRef.current = setTimeout(function () {
      updateSlideIdx(idx);
    }, autoPlayDelay * 1000);
  };

  var removeAutoPlayTimeout = function removeAutoPlayTimeout() {
    if (autoPlayTimerRef.current !== null) {
      clearTimeout(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
  };

  var getNextLoopingIdx = function getNextLoopingIdx(idx) {
    if (idx >= imageCount) {
      return 0;
    } else if (idx < 0) {
      return imageCount - 1;
    }

    return idx;
  };

  var updateSlideIdx = function updateSlideIdx(idx) {
    isRightDirectionRef.current = idx > slideIdx;
    previousSlideIdxRef.current = slideIdx;
    setSlideIdx(getNextLoopingIdx(idx));
  };

  React.useEffect(function () {
    removeAutoPlayTimeout();
    setAutoPlayTimeout(slideIdx + 1);
    return removeAutoPlayTimeout;
  }, [slideIdx]);
  return {
    slideIdx: slideIdx,
    updateSlideIdx: updateSlideIdx,
    getNextLoopingIdx: getNextLoopingIdx,
    isRightDirection: isRightDirectionRef.current,
    previousSlideIdx: previousSlideIdxRef.current
  };
};

var getURLValueFromImages = function getURLValueFromImages(images, index) {
  var _images$index;

  return ((_images$index = images[index]) === null || _images$index === void 0 ? void 0 : _images$index.url) || images[index];
};

var SimpleImageSlider = function SimpleImageSlider(_ref3) {
  var width = _ref3.width,
      height = _ref3.height,
      images = _ref3.images,
      showNavs = _ref3.showNavs,
      showBullets = _ref3.showBullets,
      _ref3$loop = _ref3.loop,
      loop = _ref3$loop === void 0 ? true : _ref3$loop,
      _ref3$autoPlay = _ref3.autoPlay,
      autoPlay = _ref3$autoPlay === void 0 ? false : _ref3$autoPlay,
      _ref3$autoPlayDelay = _ref3.autoPlayDelay,
      autoPlayDelay = _ref3$autoPlayDelay === void 0 ? 2.0 : _ref3$autoPlayDelay,
      _ref3$startIndex = _ref3.startIndex,
      startIndex = _ref3$startIndex === void 0 ? 0 : _ref3$startIndex,
      _ref3$style = _ref3.style,
      style = _ref3$style === void 0 ? undefined : _ref3$style,
      _ref3$slideDuration = _ref3.slideDuration,
      slideDuration = _ref3$slideDuration === void 0 ? 0.5 : _ref3$slideDuration,
      _ref3$bgColor = _ref3.bgColor,
      bgColor = _ref3$bgColor === void 0 ? '#000' : _ref3$bgColor,
      _ref3$bulletColor = _ref3.bulletColor,
      bulletColor = _ref3$bulletColor === void 0 ? '' : _ref3$bulletColor,
      _ref3$useGPURender = _ref3.useGPURender,
      useGPURender = _ref3$useGPURender === void 0 ? true : _ref3$useGPURender,
      _ref3$navSize = _ref3.navSize,
      navSize = _ref3$navSize === void 0 ? 50 : _ref3$navSize,
      _ref3$navMargin = _ref3.navMargin,
      navMargin = _ref3$navMargin === void 0 ? 30 : _ref3$navMargin,
      _ref3$navStyle = _ref3.navStyle,
      navStyle = _ref3$navStyle === void 0 ? ImageSliderNavStyle.NORMAL : _ref3$navStyle,
      _ref3$onClick = _ref3.onClick,
      onClick = _ref3$onClick === void 0 ? undefined : _ref3$onClick,
      _ref3$onClickNav = _ref3.onClickNav,
      onClickNav = _ref3$onClickNav === void 0 ? undefined : _ref3$onClickNav,
      _ref3$onClickBullets = _ref3.onClickBullets,
      onClickBullets = _ref3$onClickBullets === void 0 ? undefined : _ref3$onClickBullets,
      _ref3$onStartSlide = _ref3.onStartSlide,
      onStartSlide = _ref3$onStartSlide === void 0 ? undefined : _ref3$onStartSlide,
      _ref3$onCompleteSlide = _ref3.onCompleteSlide,
      onCompleteSlide = _ref3$onCompleteSlide === void 0 ? undefined : _ref3$onCompleteSlide;
  var rootStyle = React.useMemo(function () {
    return styles.getRootContainer(width, height, bgColor);
  }, [width, height, bgColor]);

  var _useSlideIndex = useSlideIndex({
    imageCount: images.length,
    startIndex: startIndex,
    autoPlay: autoPlay,
    autoPlayDelay: autoPlayDelay + slideDuration
  }),
      slideIdx = _useSlideIndex.slideIdx,
      updateSlideIdx = _useSlideIndex.updateSlideIdx,
      isRightDirection = _useSlideIndex.isRightDirection,
      getNextLoopingIdx = _useSlideIndex.getNextLoopingIdx,
      previousSlideIdx = _useSlideIndex.previousSlideIdx;

  var _React$useState3 = React.useState(styles.getImageSlide(getURLValueFromImages(images, startIndex), slideDuration, 0, useGPURender)),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      currentSliderStyle = _React$useState4[0],
      setCurrentSlideStyle = _React$useState4[1];

  var _React$useState5 = React.useState(styles.getImageSlide(getURLValueFromImages(images, startIndex + 1), slideDuration, 1, useGPURender)),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      nextSliderStyle = _React$useState6[0],
      setNextSliderStyle = _React$useState6[1];

  var isSlidingRef = React.useRef(false);
  var handleClick = React.useCallback(function (event) {
    onClick === null || onClick === void 0 ? void 0 : onClick(slideIdx, event);
  }, [slideIdx]);
  var handleClickNav = React.useCallback(function (direction) {
    return function () {
      if (isSlidingRef.current) {
        return;
      }

      var isRight = direction === ImageSliderNavDirection.RIGHT;
      onClickNav === null || onClickNav === void 0 ? void 0 : onClickNav(isRight);
      updateSlideIdx(isRight ? slideIdx + 1 : slideIdx - 1);
    };
  }, [onClickNav, slideIdx, updateSlideIdx]);
  var handleClickBullets = React.useCallback(function (idx) {
    if (idx === slideIdx || isSlidingRef.current) {
      return;
    }

    onClickBullets === null || onClickBullets === void 0 ? void 0 : onClickBullets(idx);
    updateSlideIdx(idx);
  }, [onClickBullets, slideIdx, updateSlideIdx]);
  React.useEffect(function () {
    if (slideIdx === previousSlideIdx) {
      return;
    }

    var currentUrl = getURLValueFromImages(images, getNextLoopingIdx(isRightDirection ? slideIdx - 1 : slideIdx + 1));
    var nextUrl = getURLValueFromImages(images, slideIdx);
    var currentOffsetX = isRightDirection ? -1 : 1;
    var nextReadyOffsetX = isRightDirection ? 1 : -1;
    onStartSlide === null || onStartSlide === void 0 ? void 0 : onStartSlide(slideIdx + 1, images.length);
    setNextSliderStyle(styles.getImageSlide(nextUrl, 0, nextReadyOffsetX, useGPURender));
    setTimeout(function () {
      isSlidingRef.current = true;
      setCurrentSlideStyle(styles.getImageSlide(currentUrl, slideDuration, currentOffsetX, useGPURender));
      setNextSliderStyle(styles.getImageSlide(nextUrl, slideDuration, 0, useGPURender));
    }, 50);
  }, [onStartSlide, slideIdx, isRightDirection]);
  var handleSlideEnd = React.useCallback(function () {
    isSlidingRef.current = false;
    ImageSliderPreLoader.load(getURLValueFromImages(images, slideIdx + 2));
    setCurrentSlideStyle(styles.getImageSlide(getURLValueFromImages(images, slideIdx), 0, 0, useGPURender));
    onCompleteSlide === null || onCompleteSlide === void 0 ? void 0 : onCompleteSlide(slideIdx + 1, images.length);
  }, [onCompleteSlide, slideIdx]);
  return React__default['default'].createElement("div", {
    style: _objectSpread(_objectSpread({}, rootStyle), style)
  }, React__default['default'].createElement("div", {
    style: styles.getSubContainer(width, height)
  }, React__default['default'].createElement("div", {
    style: styles.ImageSlider,
    onClick: handleClick,
    className: "rsis-container"
  }, React__default['default'].createElement("div", {
    style: currentSliderStyle,
    onTransitionEnd: handleSlideEnd,
    className: "rsis-image"
  }), images.length > 1 && React__default['default'].createElement("div", {
    style: nextSliderStyle
  })), (loop || slideIdx > 0) && React__default['default'].createElement(ImageSliderNavigation, {
    direction: ImageSliderNavDirection.LEFT,
    visible: showNavs && images.length > 0,
    type: navStyle,
    size: navSize,
    margin: navMargin,
    onClickNav: handleClickNav
  }), (loop || slideIdx < images.length - 1) && React__default['default'].createElement(ImageSliderNavigation, {
    direction: ImageSliderNavDirection.RIGHT,
    visible: showNavs && images.length > 0,
    type: navStyle,
    size: navSize,
    margin: navMargin,
    onClickNav: handleClickNav
  }), React__default['default'].createElement(ImageSliderBullets, {
    bulletColor: bulletColor,
    visible: showBullets,
    length: images.length,
    currentIdx: slideIdx,
    onClickBullets: handleClickBullets
  })));
};

module.exports = SimpleImageSlider;
