// --------------- Generator
const Mustache = require('mustache');
const u = require('./generator/utils.js');

Mustache.escape = function(text) {return text;};
Mustache.tags = ['<<%%', '%%>>'];


// ---------------------- testing mustache
let data = {
  thing: 'Pizza'
};

let someText = 'Hello, I love <<%% thing %%>>'

let output = Mustache.render(someText, data);

//console.log(output);

// ----------------------- end





// ============================================= DOCS

/*

// This works

u.copyDirAsync('./generator/template_plugin', './_OUTPUT/plugin', (err) => {
  if (err) {
    console.log('== DELETE ERROR ==');
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
