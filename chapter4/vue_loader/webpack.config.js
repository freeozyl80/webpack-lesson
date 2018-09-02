const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    devtool: 'none',
    mode:'development',
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        'vue$': 'vue/dist/vue.common.js'
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin()
    ]
  }