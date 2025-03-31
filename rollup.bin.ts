import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/cli/index.ts',
  output: {
    file: 'dist/cli.js',
    format: 'esm', // CLI lebih baik pakai ESM
    sourcemap: true,
    banner: '#!/usr/bin/env node', // Shebang untuk CLI
  },
  plugins: [resolve(), commonjs(), json(), typescript()],
  external: ['fs', 'path', 'postcss', 'tailwindcss'],
}
