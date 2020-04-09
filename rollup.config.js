
import babel from "rollup-plugin-babel";

export default {
    input: "./src/main.js",
    output: {
        file: "./dist/app.js",
        format: "iife"
    },
    plugins: [
        babel({
            exclude: "node_modules/**"
        })
    ],
    watch: {
        exclude: "node_modules/**"
    }
}
