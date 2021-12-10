const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let config = {
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        loader: 'babel-loader',
        include: [path.resolve(process.cwd(), 'src')],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
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

module.exports = config
