module.exports = {
    mode:'development',
    module: {
        rules: [
            {
              test: /\.(jpe?g|png|gif|svg)$/i,
              use: [
                //'url-loader?limit=1000',
                {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
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