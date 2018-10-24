import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/conversion.js',
    format: 'umd',
    name: 'Conversion'
  },
  plugins: [
    babel({
      plugins: [
        'external-helpers'
      ]
    })
  ]
}