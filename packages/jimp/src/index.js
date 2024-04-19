const configure = require('@jimp/custom').default;
const types = require('@jimp/types').default
const plugins = require('@jimp/plugins').default
module.exports = configure({
  types: [types],
  plugins: [plugins]
});
