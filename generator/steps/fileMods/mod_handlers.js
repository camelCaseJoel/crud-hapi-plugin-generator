const fs = require('fs');

// =================================== READ FILE
// =============================================
// -------------------------------------------------------->>>>>>>>>>>>> CHANGE HERE
// -------------------------------------------------------->>>>>>>>>>>>> CHANGE HERE
// -------------------------------------------------------->>>>>>>>>>>>> CHANGE HERE
var fileContents = fs.readFileSync('./_OUTPUT/plugin/handlers.js', {encoding: 'UTF-8'}).toString();


// ============================= CHANGE CONTENTS
// =============================================
// --------------------------------------- checking that finalData is available:
if (finalData.name && finalData.pluralName) {
  console.log('GOOD! ----> finalData seems available @ fillBlankPlugin.js file');
} else {
  console.log('WARNING! ----> finalData is NOT available!')
}
// --------------------------------------------------------------------------end

let output = mustache.render(fileContents, finalData);

//console.log(output);

// =================================== WRITE FILE
// ==============================================
// -------------------------------------------------------->>>>>>>>>>>>> CHANGE HERE
// -------------------------------------------------------->>>>>>>>>>>>> CHANGE HERE
// -------------------------------------------------------->>>>>>>>>>>>> CHANGE HERE
fs.writeFileSync('./_OUTPUT/plugin/handlers.js', output);
