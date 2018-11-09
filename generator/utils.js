const delDirAsync = require('rimraf');
const copyDirAsync = require('ncp').ncp;
copyDirAsync.limit = 16;


module.exports = {
  // usage: https://stackoverflow.com/questions/12627586/is-node-js-rmdir-recursive-will-it-work-on-non-empty-directories/12761924#12761924
  delDirAsync,
  // usage: https://www.npmjs.com/package/ncp
  copyDirAsync
};
