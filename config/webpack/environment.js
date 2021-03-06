const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const merge = require('webpack-merge')

environment.loaders.prepend('typescript', typescript)

const myCssLoaderOptions = {
  modules: {
    localIdentName: '[local]--[hash:base64:5]',
  },
  sourceMap: false,
}

const CSSLoader = environment.loaders.get('sass').use.find(el => el.loader === 'css-loader')
CSSLoader.options = merge(CSSLoader.options, myCssLoaderOptions);

module.exports = environment
