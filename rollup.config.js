import babel from "rollup-plugin-babel";
import env from "postcss-preset-env";
import resolve from "rollup-plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";


export default {
    input: "src/main.js",
    output: {
        file: "./build/src/bundle.min.js",
        format: "iife",
        name: "bundle"
    },
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        postcss({
            plugins: [
                env({
                    stage: 3,
                    browsers: "last 2 versions"
                  })
            ],
            minimize: true,
            extract: true,
            extensions: [".css", ".scss"]
        }),
        resolve(),
        commonjs(),
        serve({
            open: true,
            openPage: "/",
            host: "localhost",
            port: 8080,
            contentBase: ["./build"],
        }),
        livereload({
            watch: ["./src"],
            exts: ["html", "css", "scss", "js"],
        }),
        terser()
    ]
}