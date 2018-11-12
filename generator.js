// ---------> Loading GLOBALS
// --------------------------
// don't do this at home kids
// --------------------------
// Don't change the order of the loading:
require('./generator/fake-data-types.js'); //------------- 1 st
require('./generator/fake-sequelize.js');  //------------- 2 nd
require('./_INPUT/_INPUT_MODEL.js'); // ------------------ 3 rd


// --------------- Imports
const Mustache = require('mustache');
const u = require('./generator/utils.js');

// loading steps functions
const cleanOutputFolder = require('./generator/steps/cleanOutputFolder.js');
const copyBlankPlugin   = require('./generator/steps/copyBlankPlugin.js');
const parseInputModel   = require('./generator/steps/parseInputModel.js');
const fillBlankPlugin   = require('./generator/steps/fillBlankPlugin');

// configuring Mustache
Mustache.escape = function(text) {return text;};
Mustache.tags = ['<<%%', '%%>>'];

// init function with program steps
const init = async () => {
  await cleanOutputFolder();
  await copyBlankPlugin();
  await parseInputModel();
  await fillBlankPlugin();

  return 'exit';
}

init();



// ============================================= DOCS




/*

// This works

u.copyDirAsync('./generator/template_plugin', './_OUTPUT/plugin', (err) => {
  if (err) {
    console.log('== COPY ERROR ==');
    console.log(err);
  } else {
    console.log('Folder Copied!');
  }
});

*/




/*

// This works

u.delDirAsync('./_OUTPUT/delete_me', (err) => {
  if(err){
    console.log('== DELETE ERROR ==');
    console.log(err);
  } else {
    console.log('Folder deleted!');
  }
});

*/




/*

// This works

// ---------------------- testing mustache
let data = {
  thing: 'Pizza'
};

let someText = 'Hello, I love <<%% thing %%>>'

let output = Mustache.render(someText, data);

//console.log(output);

// ----------------------- end


*/
