const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const path = require('path')

module.exports = defineConfig({
  configureWebpack: {
    externals: {
      electron: 'commonjs electron', // Excluir o pacote electron do bundle frontend
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
        __dirname: JSON.stringify(path.resolve(__dirname)),
      }),
    ],
    resolve: {
      fallback: {
        fs: require.resolve('browserify-fs'),
        path: require.resolve('path-browserify'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify')
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
})
