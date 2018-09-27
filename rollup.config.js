import babel from "rollup-plugin-babel";
import image from "rollup-plugin-img";
import pkg from "./package.json";

const external = id => !id.startsWith("/") && !id.startsWith(".");

export default {
    input: "./src/ImageSlider.jsx",
    output: {
        file: pkg.main,
        format: "cjs",
    },
    plugins: [
        babel({ runtimeHelpers: true }),
        image({ limit: 1000 }),
    ],
    external,
};
