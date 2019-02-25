const webpackResolveConfig = require('./configs/webpack.config.resolve');

const aliases = Object.keys(webpackResolveConfig.alias).map(key => [key, webpackResolveConfig.alias[key]]);

module.exports = {
  "settings": {
    'import/resolver': {
      "webpack": {
          "config": "./configs/webpack.config.common.js"
      },
    },
  },
  "extends": "eslint-config-airbnb",
  "env": {
    "jest": true,
    "node": true,
  },
  "parser": "babel-eslint",
}
