const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const merge = require('webpack-merge')

environment.loaders.prepend('typescript', typescript)

const myCssLoaderOptions = {
  modules: true,
  sourceMap: false,
}

const CSSLoader = environment.loaders.get('css').use.find(el => el.loader === 'css-loader')
CSSLoader.options = merge(CSSLoader.options, myCssLoaderOptions);

module.exports = environment
