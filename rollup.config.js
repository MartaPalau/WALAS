import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
//import uglify from 'rollup-plugin-uglify';
import eslint from 'rollup-plugin-eslint';
//import babel from 'rollup-plugin-babel';

export default {
  entry: 'index.js',  
  dest: 'dist/walas.js',
  format: 'umd',
  moduleName:'Walas',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),  
    commonjs(),    
    replace({
      'process.env.NODE_ENV': JSON.stringify("production")
    }),
    //eslint(),
    /*babel({
      exclude: 'node_modules/**',
    }),*/
    //uglify()
  ],
  sourceMap: true,
  sourceMapFile:'dist/walas.js.map'
};