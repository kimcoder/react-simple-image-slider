import babel from "rollup-plugin-babel";
import image from "rollup-plugin-img";
import typescript from 'rollup-plugin-typescript2';
import pkg from "./package.json";

const external = id => !id.startsWith("/") && !id.startsWith(".");

export default {
    input: "src/index.ts",
    output: {
        file: pkg.main,
        format: "esm",
    },
    plugins: [
        babel({ runtimeHelpers: true }),
        image({ limit: 1000 }),
        typescript({
        tsconfig: 'tsconfig.json',
        tsconfigOverride: {
            include: [ 'src/**/*' ],
            exclude: [ 'node_modules', 'example' ]
          }
        })
    ],
    external,
};
