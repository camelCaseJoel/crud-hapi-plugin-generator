const u = require.main.require('./generator/utils.js');

module.exports = async () => {
  // promisify here
  const promiseDelDirAsync = (path) => {
    new Promise((resolve) => {
      return u.delDirAsync(path, resolve);
    });
  }
  // --------------
  await promiseDelDirAsync('./_OUTPUT/plugin');

  return true;


};
