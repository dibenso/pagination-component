import { terser } from "rollup-plugin-terser";
import config, { plugins } from "./rollup.config.common";

export default Object.assign(config, {
  output: [
    {
      name: "Pagination",
      file: "dist/pagination-component.umd.js",
      format: "umd",
      globals: {
        react: "React",
        "react-dom": "ReactDOM"
      },
      exports: "named"
    }
  ],
  plugins: plugins.concat([terser()])
});
