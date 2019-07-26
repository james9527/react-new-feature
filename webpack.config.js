var path = require('path');
var webpack = require('webpack');
// path.resolve() 将一系列路径或路径段解析为绝对路径
var NODE_DIR = path.resolve(__dirname, 'node_modules');

module.exports = {
  entry: {
    lib: ['react', 'react-dom']
  },
  resolve: {
    alias: {
      'react': path.join(NODE_DIR, 'react/index.js'),
      'react-dom': path.join(NODE_DIR, 'react-dom/index.js')
    }
  },
  externals: {
    React: 'react'
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: '40000',
      chunks: 'all',
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          priority: 10,
          enforce: true
        },
        common: {
          name: 'common',
          minChunks: 2,
          minSize: 30000
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  output: {
    path: 'build',
    filename: 'lib.js'
  }
}