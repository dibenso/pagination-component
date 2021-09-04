import config, { plugins } from "./rollup.config.common";
import pkg from "../package.json";

export default Object.assign(config, {
  output: {
    name: "Pagination",
    file: `dist/${pkg.name}.dev.js`,
    format: "cjs",
    exports: "named"
  },
  plugins: plugins.concat([])
});
