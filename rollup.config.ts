import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'playground/js/index.mjs',
      format: 'esm',
      sourcemap: !production,
      exports: 'named',
    },
    {
      file: 'playground/js/index.cjs',
      format: 'cjs',
      sourcemap: !production,
      exports: 'named',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    json(),
    typescript({ tsconfig: './tsconfig.json' }),
  ],
  external: ['fs', 'path'],
}
