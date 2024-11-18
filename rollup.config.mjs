import externals from 'rollup-plugin-node-externals';
import terser from '@rollup/plugin-terser';

/** @type {import('rollup').RollupOptions} */
const config = [
  {
    input: './src/parser.js',
    output: {
      file: './dist/index.min.js',
      format: 'es',
    },
    plugins: [externals(), terser()],
    external: [/^@lezer\/.*/],
  },
  {
    input: './src/parser.js',
    output: {
      file: './dist/index.js',
      format: 'es',
    },
    plugins: [externals()],
    external: [/^@lezer\/.*/],
  },
];

export default config;
