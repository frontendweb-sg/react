import { fileURLToPath } from "node:url";
import pkg from "./package.json" assert { type: "json" };
import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import commonjs from "@rollup/plugin-commonjs";
import { dts } from "rollup-plugin-dts";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import externalPeers from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";
import alias from "@rollup/plugin-alias";

const prod = !process.env.ROLLUP_WATCH;
const extensions = [".js", ".jsx", ".ts", ".tsx"];
const global = ["react", "prop-types", Object.keys(pkg?.dependencies ?? {})];

const commonPlugins = [
  json(),
  alias({
    entries: {
      src: fileURLToPath(new URL("src", import.meta.url)),
    },
  }),
  externalPeers(),
  nodeResolve({ extensions }),
  typescript({
    tsconfig: "./tsconfig.json",
    exclude: [
      "src/**/*.spec.(ts|tsx)",
      "src/**/*.test.(ts|tsx)",
      "src/**/*.stories.(ts|tsx)",
    ],
  }),
  prod && terser(),
];

/**@type {import("rollup").RollupOptions} */
export default [
  {
    external: global,
    input: "src/index.ts",
    output: [
      { file: pkg.main, format: "cjs", sourcemap: true },
      { file: pkg.module, format: "es", sourcemap: true },
    ],
    plugins: [...commonPlugins],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
    external: [/\.(scss|sass|css)$/],
  },
];
