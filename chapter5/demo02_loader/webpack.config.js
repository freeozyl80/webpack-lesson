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
                    loader: path.resolve('../common-loader.js')
                  },{
                    loader: path.resolve('./loader.js'),
                  }
                ]
            }
        ]
      }
  }