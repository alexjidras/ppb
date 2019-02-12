var path = require('path');
module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve("../html/ppb/frontend/js"),
    filename: 'bundle.js'
  }
};