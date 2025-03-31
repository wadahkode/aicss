import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.mjs',
      format: 'esm',
      sourcemap: !production,
      exports: 'named',
    },
    {
      file: 'dist/index.cjs',
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
  external: ['chokidar', 'fs', 'path', 'postcss', 'tailwindcss'],
}
