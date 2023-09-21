import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import css from "rollup-plugin-import-css";


const packageJson = require("./package.json");

export default [
  {
    input: "src/index.js",
    output: [
      {
        dir: packageJson.main.slice(0, -8),
        format: "cjs",
        sourcemap: false,
      },
      {
        dir: packageJson.module.slice(0, -8),
        format: "esm",
        sourcemap: false,
      },
    ],
    external: ["next/link", "next/router", "react", "react-dom"],
    plugins: [
      resolve({
        dedupe: ["react", "react-dom", "next/link", "next/router"],
      }),
      babel({
        presets: ["@babel/preset-react"],
      }),
      commonjs(),
      css()
    ],
  },
];
