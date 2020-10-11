import PropTypes from "prop-types";

const isValidNavStyle = prop => /[1-2]/.test(prop) && typeof prop === "number";

export default {
    propTypes: {
    // Required
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
        images: (props, propName, componentName) => {
            const propValue = props[propName];
            if (!propValue) {
                return new Error(
                    `Warning: Prop type ${propName} is required in ${componentName}.`,
                );
            }
            if (!Array.isArray(propValue)) {
                return new Error(
                    `Warning: Failed prop type: Invalid prop ${propName} of type ${typeof propValue} supplied to ${componentName}, expected Array.`,
                );
            }
            let error = null;
            if (propValue.length > 0) {
                const urlAccessor = props.imageUrlAccessor;
                propValue.forEach((val) => {
                    if (typeof val !== "object" || val === null) {
                        error = new Error(
                            `Warning: Invalid prop ${propName} array element of type ${typeof val} supplied to ${componentName}, expected Object`,
                        );
                        return;
                    }

                    if (!Object.prototype.hasOwnProperty.call(val, urlAccessor)) {
                        error = new Error(
                            `Missing object url field name for the ${propName} supplied to ${componentName}. Should be "${urlAccessor}".`,
                        );
                    }
                });
            }
            return error;
        },

        // Optional
        style: PropTypes.objectOf(PropTypes.string),
        slideDuration: PropTypes.number,
        showNavs: PropTypes.bool,
        showBullets: PropTypes.bool,
        bgColor: PropTypes.string,
        useGPURender: PropTypes.bool,
        imageUrlAccessor: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        onClickNav: PropTypes.func,
        onClickBullets: PropTypes.func,
        onStartSlide: PropTypes.func,
        onCompleteSlide: PropTypes.func,

        // Optional, Navigation Arrow Style
        navStyle: (props, propName, componentName) => {
            if (!isValidNavStyle(props[propName])) {
                return new Error(
                    `Invalid prop ${propName} supplied to ${componentName}. Validation failed.`,
                );
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
        imageUrlAccessor: "url",
    },
};
