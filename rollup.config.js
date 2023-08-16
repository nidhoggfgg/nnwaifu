import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commomjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import { dts } from 'rollup-plugin-dts';
// import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'src/main.ts',
    output: [
      {
        file: 'dist/nnwaifu.js',
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve({
        preferBuiltins: false
      }),
      nodePolyfills(),
      commomjs(),
      typescript(),
      // terser()
    ],
  },
  {
    input: 'dist/dts/main.d.ts',
    output: [
      {
        file: 'dist/nnwaifu.d.ts',
        format: 'es'
      }
    ],
    plugins: [
      dts()
    ]
  }
]