module.exports = {
    devtool: false,
    mode:'development',
    module: {
        rules: [
            {
              test: /\.(jpe?g|png|gif|svg)$/i,
              use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        fallback: 'file-loader',
                        name: "img_[name].[ext]",
                    }
                },
                {
                    loader: 'img-loader',
                    options: {
                      plugins: [
                        require('imagemin-mozjpeg')({
                          progressive: true,
                          arithmetic: false
                        })
                      ]
                    }
                  }
              ]
            }
          ]
    }
  }