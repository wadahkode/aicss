import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { fileURLToPath } from 'url'
import path from 'path'
import NodePolyfillsWebpack from 'node-polyfill-webpack-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  entry: {
    aicss: './src/index.ts',
  },
  target: 'web',
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new NodePolyfillsWebpack(),
  ],
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Aicss',
    libraryTarget: 'umd',
    globalObject: 'this',
    // hotUpdateChunkFilename: '[memories].[fullhash].hot-update.js',
  },
  performance: {
    hints: 'warning',
    //maxEntrypointSize: 4 * 1024 * 1024,
    //maxAssetSize: 10 * 1024 * 1024
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'], // Resolusi ekstensi yang bisa diimport
    fallback: {
      fs: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Ekstensi yang diproses oleh ts-loader
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
}
