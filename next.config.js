const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

module.exports = withImages(withSass({
  cssModules: false,
  webpack: (config, {
    isServer
  }) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    if (!isServer) {
      config.module.rules.push({
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [{
          loader: 'file-loader',
        }]
      })
    }

    return config
  }
}));