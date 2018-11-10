const u = require.main.require('./generator/utils.js');

module.exports = async () => {
  // -------------------------- promisify here
  const promiseCopyDirAsync = (pathCopy, pathPaste) => {
    return new Promise((resolve) => {
      return u.copyDirAsync(pathCopy, pathPaste, resolve);
    });
  }
  // -------------------------------------------

  await promiseCopyDirAsync('./generator/template_plugin', './_OUTPUT/plugin')
    .then(() => {
      console.log('Successful copying! yay!');
    }).catch((e) => {
      console.log('ERROR COPYING');
      console.log(e);
    });

  return true;

};
