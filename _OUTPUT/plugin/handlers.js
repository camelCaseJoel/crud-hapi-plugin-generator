//const messages = require('./text/messages');
const dbm = require('../database/wrapper/permission'); // db methods


const createPermission = async (request, h) => {
  const dbResponse = dbm.createPermission(request.payload);
  return dbResponse;
}

const findPermission = async (request, h) => {
  console.log(request.params.id);
  return dbResponse = dbm.findPermissionById(request.params.id);
  return dbResponse;
}

const findPermissions = async (request, h) => {
  const dbResponse = dbm.findPermissions(request.query);
  return dbResponse;
}

const updatePermission = async (request, h) => {
  const dbResponse = dbm.updatePermission(request.params.id, request.payload);
  return dbResponse;
}

const deletePermission = async (request, hack) => {
  const dbResponse = dbm.deletePermission(request.params.id);
  return dbResponse;
}


module.exports = {
  createPermission,
  findPermission,
  findPermissions,
  updatePermission,
  deletePermission
}
