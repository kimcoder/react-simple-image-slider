import PropTypes from "prop-types";

const isValidNavStyle = prop => (/[1-2]/.test(prop) && typeof (prop) === "number");

export default {
    propTypes: {
        // Required
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.shape({
            url: PropTypes.string.isRequired,
        })).isRequired,

        // Optional
        style: PropTypes.objectOf(PropTypes.string),
        slideDuration: PropTypes.number,
        showNavs: PropTypes.bool,
        showBullets: PropTypes.bool,
        bgColor: PropTypes.string,
        useGPURender: PropTypes.bool,
        onClickNav: PropTypes.func,
        onClickBullets: PropTypes.func,
        onStartSlide: PropTypes.func,
        onCompleteSlide: PropTypes.func,

        // Optional, Navigation Arrow Style
        navStyle: (props, propName, componentName) => {
            if (!isValidNavStyle(props[propName])) {
                return new Error(`Invalid prop ${propName} supplied to ${componentName}. Validation failed.`);
            }
            return null;
        },
    },
    defaultTypes: {
        slideDuration: 0.5,
        showNavs: true,
        showBullets: true,
        bgColor: "#000000",
        useGPURender: true,
        navStyle: 1,
    },
};
