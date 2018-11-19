const delDirContentsAsync = require('./functions.js').removeDirForce;
const camelCaseToDash = require('./functions.js').camelCaseToDash;
const delDirAsync  = require('rimraf');
const copyDirAsync = require('ncp').ncp;
copyDirAsync.limit = 16;



module.exports = {
  // usage: https://stackoverflow.com/questions/12627586/is-node-js-rmdir-recursive-will-it-work-on-non-empty-directories/12761924#12761924
  delDirAsync,
  // usage: https://www.npmjs.com/package/ncp
  copyDirAsync,
  // usage: https://gist.github.com/liangzan/807712/8fb16263cb39e8472d17aea760b6b1492c465af2
  delDirContentsAsync,

  camelCaseToDash
};
