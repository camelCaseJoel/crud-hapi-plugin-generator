const u = require.main.require('./generator/utils.js');

module.exports = async () => {
  await u.copyDirAsync('./generator/template_plugin', './_OUTPUT/plugin', (err) => {
    if (err) {
      console.log('== COPY new template ERROR ==');
      console.log(err);
      return false;
    } else {
      console.log('New Plugin created from template!');
      return true;
    }
  });


};
