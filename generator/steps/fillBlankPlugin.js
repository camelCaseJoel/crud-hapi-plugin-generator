const fs = require('fs');
const doneGraphic = fs.readFileSync('./generator/graphics/done.txt', {encoding: 'UTF-8'}).toString();

module.exports = async () => {
  require('./fileMods/mod_index.js');
  require('./fileMods/mod_routes.js');
  require('./fileMods/mod_handlers.js');


  console.log(doneGraphic);
  console.log(`Go to --> _OUTPUT folder, your new plugin should be there`);
  console.log('---------------------------------------------------------');

  return true;

/*

  // ----------------------- Promisify here
  const promiseReadFile = (filePath, charEncoding) => {
    return new Promise((resolve) => {
      return fs.readFile(filePath, charEncoding, resolve);
    });
  }
  // --------------------------------------

  await promiseReadFile('./_OUTPUT/plugin/index.js', {encoding: 'UTF-8'})
    .then((result) => {
      console.log(result.toString());
    }).catch((e) => {
      console.log(e);
    });

    return true;

*/


  //
  // fs.readFile('test.txt', 'utf8', function(err, fileContents) {
  //   if (err) throw err;
  //   console.log(fileContents)
  // });
  //
  // console.log('blank plugin filled with info');
  // return true;
};
