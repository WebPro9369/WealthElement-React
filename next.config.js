const {
  PHASE_PRODUCTION_SERVER
} = process.env.NODE_ENV === 'development' ? {} : require('next-server/constants');

module.exports = (phase, {
  defaultConfig
}) => {
  console.log("In Next.config")
  console.log("phase = ", phase)
  console.log("PHASE_PRODUCTION_SERVER = ", PHASE_PRODUCTION_SERVER)
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {
      publicRuntimeConfig: {
        staticFolder: '/static'
      }
    };
  }

  const withCSS = require('@zeit/next-css')
  const withSass = require('@zeit/next-sass')
  const withImages = require('next-images')  
  return withImages(withCSS(withSass({
    cssModules: false,
    webpack: (config, {
      isServer
    }) => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty'
      }
      return config
    }
  })))
}
