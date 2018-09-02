var path = require('path')
module.exports = {
    devtool: 'none',
    mode:'development',
    module: {
        rules: [
            {
                test: /\.jsonp$/,
                use: [
                    {
                        loader: path.resolve('./lowcase-loader.js')
                    },
                    {
                        loader: path.resolve('./jsonp-loader.js'),
                        options: {
                            'cbname': 'callback'
                        }
                    }
                ]
            }
        ]
      }
  }