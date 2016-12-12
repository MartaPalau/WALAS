import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'index.js',  
  dest: 'dist/bundle.js',
  format: 'umd',
  moduleName:'Walas',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    uglify()
  ],
  
  sourceMap: true,
  sourceMapFile:'dist/bundle.js.map'
};