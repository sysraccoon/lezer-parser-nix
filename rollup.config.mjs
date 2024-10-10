import externals from 'rollup-plugin-node-externals';

export default [
  {
    input: "./src/parser.js",
    output: [{
      format: "cjs",
      file: "./dist/index.cjs"
    }, {
      format: "es",
      file: "./dist/index.js"
    }],
    external: [/^@lezer\/.*/],
    plugins: [externals()],
  },
];
