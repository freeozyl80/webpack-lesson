var path = require('path')
module.exports = {
    devtool: 'none',
    watch: true,
    mode:'development',
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: [
                  {
                    loader: path.resolve('./schema-loader.js'),
                    options: {
                        'param': true
                    }
                  }
                ]
            }
        ]
      }
  }