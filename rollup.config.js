import {terser} from 'rollup-plugin-terser';
export default {
  input: "./src/index.js",
  output: [
    {
      file: "./dist/popularRegular.js",
      name: "PR",
      format: "umd",
    },
    {
      file: "./dist/popularRegular.min.js",
      name: "PR",
      format: "umd",
      plugins: [terser()],
    },
  ],
};
