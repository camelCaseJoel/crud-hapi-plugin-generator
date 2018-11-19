// =============================================================
// =============================================================
// =============================================================
const fs = require('fs');
const _  = require('underscore');

function removeDirForce(path) {
  let msg = 'this crap doesnt work';
  return msg + path;
}

function camelCaseToDash( myStr ) {
  return myStr.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
}
// =============================================================
// =============================================================
// =============================================================


module.exports = {
  removeDirForce,
  camelCaseToDash
};
