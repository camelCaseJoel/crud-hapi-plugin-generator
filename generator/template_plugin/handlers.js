const messages = require('./text/messages');
const dbm = require('../database/wrapper/<<%% name %%>>'); // db methods

/**
 * @function
 * @name    create<<%% capitalizedName %%>>
 * @param   {object} request
 * @param   {object} h
 */
const create<<%% capitalizedName %%>> = async (request, h) => {
  const db = request.server.methods.db;
  const util = request.server.methods.util;

  try {
    const dbResponse = await db.create<<%% capitalizedName %%>>(request.payload);
    return util.buildResponse(messages.success.DEFAULT_MESSAGE, true, dbResponse);
  } catch (err) {
    console.log(err);
  }
  return util.buildResponse(messages.failure.DEFAULT_MESSAGE);
}

/**
 * @function
 * @name    find<<%% capitalizedName %%>>
 * @param   {object} request
 * @param   {object} h
 */
const find<<%% capitalizedName %%>> = async (request, h) => {
  const db = request.server.methods.db;
  const util = request.server.methods.util;

  try {
    const dbResponse = await db.findfind<<%% capitalizedName %%>>ById(request.params.id);
    return util.buildResponse(messages.success.DEFAULT_MESSAGE, true, dbResponse);
  } catch (err) {
    console.log(err);
  }
  return util.buildResponse(messages.failure.DEFAULT_MESSAGE);
}

/**
 * @function
 * @name    find<<%% capitalizedPluralName %%>>
 * @param   {object} request
 * @param   {object} h
 */
const find<<%% capitalizedPluralName %%>> = async (request, h) => {
  const db = request.server.methods.db;
  const util = request.server.methods.util;

  try {
    const dbResponse = await db.find<<%% capitalizedPluralName %%>>(request.query);
    return util.buildResponse(messages.success.DEFAULT_MESSAGE, true, dbResponse);
  } catch (err) {
    console.log(err);
  }
  return util.buildResponse(messages.failure.DEFAULT_MESSAGE);
}

/**
 * @function
 * @name    update<<%% capitalizedName %%>>
 * @param   {object} request
 * @param   {object} h
 */
const update<<%% capitalizedName %%>> = async (request, h) => {
  const db = request.server.methods.db;
  const util = request.server.methods.util;

  try {
    const dbResponse = await db.update<<%% capitalizedName %%>>(request.params.id, request.payload);
    return util.buildResponse(messages.success.DEFAULT_MESSAGE, true, dbResponse);
  } catch (err) {
    console.log(err);
  }
  return util.buildResponse(messages.failure.DEFAULT_MESSAGE);
}

/**
 * @function
 * @name    delete<<%% capitalizedName %%>>
 * @param   {object} request
 * @param   {object} h
 */
const delete<<%% capitalizedName %%>> = async (request, hack) => {
  const db = request.server.methods.db;
  const util = request.server.methods.util;

  try {
    const dbResponse = await db.delete<<%% capitalizedName %%>>(request.params.id);
    return util.buildResponse(messages.success.DEFAULT_MESSAGE, true, dbResponse);
  } catch (err) {
    console.log(err);
  }
  return util.buildResponse(messages.failure.DEFAULT_MESSAGE);
}


module.exports = {
  create<<%% capitalizedName %%>>,
  find<<%% capitalizedName %%>>,
  find<<%% capitalizedPluralName %%>>,
  update<<%% capitalizedName %%>>,
  delete<<%% capitalizedName %%>>
}
