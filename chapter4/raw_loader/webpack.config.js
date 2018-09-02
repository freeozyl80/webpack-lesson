module.exports = {
    mode:'development',
    devtool: 'false',
    module: {
      rules: [
        {
          test: /\.txt$/,
          use: 'raw-loader'
        }
      ]
    }
  }