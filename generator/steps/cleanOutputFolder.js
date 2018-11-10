const u = require.main.require('./generator/utils.js');

module.exports = async () => {
  // ------------------------ promisify here
  const promiseDelDirAsync = (path) => {
    return new Promise((resolve) => {
      return u.delDirAsync(path, resolve);
    });
  }
  // --------------------------------------

  await promiseDelDirAsync('./_OUTPUT/plugin')
    .then(() => {

  }).catch((e) => {
      console.log('ERROR CLEANING');
      console.log(e);
  });

  return true;


};
