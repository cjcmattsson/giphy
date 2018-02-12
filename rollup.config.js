import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/scripts/index.js',
  output: {
    file: 'public/assets/scripts/giphy.js',
    format: 'iife',
    sourcemap: true
  }
};

plugins: [
  resolve(),
  babel({
    exclude: 'node_modules/**'
  }),
  commonjs(),
  (process.env.NODE_ENV === 'production' && uglify()),
]
