const path = require('path');
let prod = process.env.NODE_ENV === 'production';

module.exports = {
  wpyExt: '.wpy',
  build: {
    web: {
      apis: ['showToast', 'showActionSheet', 'showModal'],
      components: ['navigator', 'button', 'icon', 'progress', 'slider', 'radio', 'radio-group', 'checkbox', 'checkbox-group', 'switch'],
      htmlTemplate: path.join('src', 'index.template.html'),
      htmlOutput: path.join('web', 'index.html'),
      jsOutput: path.join('web', 'index.js')
    }
  },
  eslint: true,
  compilers: {
    less: {
      compress: true
    },
    babel: {
      sourceMap: true,
      presets: [
        'env',
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions',
      ]
    }
  },
  plugins: {
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
};

if (prod) {

  delete module.exports.compilers.babel.sourcesMap;

  // 压缩less
  module.exports.compilers['less'] = {compress: true}

  // 压缩js
  module.exports.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {
      }
    },
  };
}
