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
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    external: ["next/link", "next/router", "prismjs", "react", "react-dom"],
    plugins: [
      resolve(),
      babel({
        presets: ["@babel/preset-react"],
      }),
      commonjs(),
    ],
  },
];
