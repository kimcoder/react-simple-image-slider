import babel from "rollup-plugin-babel";
import pkg from "./package.json";

const external = id => !id.startsWith("/") && !id.startsWith(".");
const getBabelOptions = () => ({
    runtimeHelpers: true,
    plugins: ["@babel/transform-runtime"]
});

export default {
    input: "./src/ImageSlider.jsx",
    output: { 
        file: pkg.main,
        format: "cjs" 
    },
    plugins: [
        babel(getBabelOptions()),
    ],
    external
}