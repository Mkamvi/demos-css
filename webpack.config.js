import path from 'path'
import { fileURLToPath } from 'url'

import { merge } from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import remarkAttr from 'remark-attr'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let config = {
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.mdx?$/,
        use: [
          'babel-loader',
          {
            loader: '@mdx-js/loader',
            options: {
              remarkPlugins: [remarkAttr],
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx|js)$/,
        loader: 'babel-loader',
        include: [path.resolve(process.cwd(), 'src')],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
const devConfig = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 1025,
    historyApiFallback: true,
    hot: 'only',
  },
}
const prodConfig = {}

if (process.env.NODE_ENV === 'development') {
  config = merge(config, devConfig)
} else {
  config = merge(config, prodConfig)
}

export default config
