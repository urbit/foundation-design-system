import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: false,
      },
      {
        file: packageJson.module,
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
    ],
  },
];
