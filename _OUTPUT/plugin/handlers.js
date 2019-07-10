const messages = require('./text/messages');
const dbm = require('../database/wrapper/permission'); // db methods

/**
 * @function
 * @name    createPermission
 * @param   {object} request
 * @param   {object} h
 */
const createPermission = async (request, h) => {
  const db = request.server.methods.db;
  const util = request.server.methods.util;

  try {
    const dbResponse = await db.createPermission(request.payload);
    return util.buildResponse(messages.success.DEFAULT_MESSAGE, true, dbResponse);
  } catch (err) {
    console.log(err);
  }
  return util.buildResponse(messages.failure.DEFAULT_MESSAGE);
}

/**
 * @function
 * @name    findPermission
 * @param   {object} request
 * @param   {object} h
 */
const findPermission = async (request, h) => {
  const db = request.server.methods.db;
  const util = request.server.methods.util;

  try {
    const dbResponse = await db.findfindPermissionById(request.params.id);
    return util.buildResponse(messages.success.DEFAULT_MESSAGE, true, dbResponse);
  } catch (err) {
    console.log(err);
  }
  return util.buildResponse(messages.failure.DEFAULT_MESSAGE);
}

/**
 * @function
 * @name    findPermissions
 * @param   {object} request
 * @param   {object} h
 */
const findPermissions = async (request, h) => {
  const db = request.server.methods.db;
  const util = request.server.methods.util;

  try {
    const dbResponse = await db.findPermissions(request.query);
    return util.buildResponse(messages.success.DEFAULT_MESSAGE, true, dbResponse);
  } catch (err) {
    console.log(err);
  }
  return util.buildResponse(messages.failure.DEFAULT_MESSAGE);
}

/**
 * @function
 * @name    updatePermission
 * @param   {object} request
 * @param   {object} h
 */
const updatePermission = async (request, h) => {
  const db = request.server.methods.db;
  const util = request.server.methods.util;

  try {
    const dbResponse = await db.updatePermission(request.params.id, request.payload);
    return util.buildResponse(messages.success.DEFAULT_MESSAGE, true, dbResponse);
  } catch (err) {
    console.log(err);
  }
  return util.buildResponse(messages.failure.DEFAULT_MESSAGE);
}

/**
 * @function
 * @name    deletePermission
 * @param   {object} request
 * @param   {object} h
 */
const deletePermission = async (request, hack) => {
  const db = request.server.methods.db;
  const util = request.server.methods.util;

  try {
    const dbResponse = await db.deletePermission(request.params.id);
    return util.buildResponse(messages.success.DEFAULT_MESSAGE, true, dbResponse);
  } catch (err) {
    console.log(err);
  }
  return util.buildResponse(messages.failure.DEFAULT_MESSAGE);
}


module.exports = {
  createPermission,
  findPermission,
  findPermissions,
  updatePermission,
  deletePermission
}
