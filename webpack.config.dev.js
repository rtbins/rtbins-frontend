import webpack from 'webpack'
import path from 'path'

export default {
  mode: 'development',
  devtool: 'inline-source-map',
  // noInfo: false,
  entry: {
    // 'eventsource-polyfill', // necessary for hot reloading with IE
    // 'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    app: ['./src/index.tsx', 'webpack-hot-middleware/client?reload=true'],
    // filename: path.resolve(__dirname, 'src/index'),
  },
  target: 'web',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  output: {
    path: `${__dirname}/dist`, // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),
  ],
  // Below telling webpack type of files we want it to handle
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel'],
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: 'file-loader',
      },
      {
        test: /(bootstrap\.min|normalize|css.styles|toastr\.min)\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /^((?!(bootstrap|normalize|css.styles|toastr\.min)).)*\.css$/,
        loader:
          'typings-for-css-modules?modules&namedExport&camelCase',
      },
      {
        test: /(\.scss)$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url?prefix=font/&limit=5000',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },
  resolveLoader: {
    moduleExtensions: ['-loader'],
  },
  /*
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
  */
}
