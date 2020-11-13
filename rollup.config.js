import babel from "rollup-plugin-babel";
import env from "postcss-preset-env";
import resolve from "rollup-plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-cpy";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

export default {
    input: "src/main.js",
    output: {
        file: "./build",
        file: "./build/src/bundle.min.js",
        format: "iife",
        name: "bundle"
    },
    plugins: [
        babel({
            exclude: "node_modules/**",
            runtimeHelpers: true
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
        copy([
            {
                files: ["index.html"],
                dest: "build",
                options: {
                    verbose: true
                }
            },
            {
                files: ["public/fonts"],
                dest: "build/public/fonts",
                options: {
                    verbose: true
                }
            },
            {
                files: ["public/head"],
                dest: "build/public/head",
                options: {
                    verbose: true
                }
            },
            {
                files: ["public/images/brewery-desktop"],
                dest: "build/public/images/brewery-desktop",
                options: {
                    verbose: true
                }
            },
            {
                files: ["public/images/brewery-mobile"],
                dest: "build/public/images/brewery-mobile",
                options: {
                    verbose: true
                }
            },
            {
                files: ["public/images/recipe-mobile"],
                dest: "build/public/images/recipe-mobile",
                options: {
                    verbose: true
                }
            },
            {
                files: ["public/images/recipe-desktop"],
                dest: "build/public/images/recipe-desktop",
                options: {
                    verbose: true
                }
            },
            {
                files: ["public/images/icons"],
                dest: "build/public/images/icons",
                options: {
                    verbose: true
                }
            },
        ]
        ),
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