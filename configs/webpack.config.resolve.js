const path = require('path');

const baseDir = path.resolve(__dirname, '..');

module.exports = {
  extensions: [
    '.json',
    // mjs needs to be before jsx
    // https://github.com/graphql/graphql-js/issues/1272#issuecomment-377384574
    '.mjs',
    '.js',
  ],
  alias: {
    Data: path.resolve(baseDir, 'src/data'),
    Middlewares: path.resolve(baseDir, 'src/middlewares'),
    Requests: path.resolve(baseDir, 'src/Requests'),
    Routes: path.resolve(baseDir, 'src/Routes'),
    Store: path.resolve(baseDir, 'src/store'),
    Src: path.resolve(baseDir, 'src'),
  },
};
