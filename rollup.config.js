
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
    input: "./src/main.js",
    output: {
        file: "./dist/app.js",
        format: "iife"
    },
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        resolve(),
        commonjs()
    ],
    external: id => /^react|styled-jsx/.test(id),
    watch: {
        exclude: "node_modules/**"
    }
}
