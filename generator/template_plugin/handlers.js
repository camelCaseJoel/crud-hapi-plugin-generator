const messages = require('./text/messages');
const dbm = require('../database/wrapper/<<%% name %%>>'); // db methods


const create<<%% capitalizedName %%>> = async (request, h) => {
  const dbResponse = dbm.create<<%% capitalizedName %%>>(request.payload);
  return dbResponse;
}

const find<<%% capitalizedName %%>> = async (request, h) => {
  console.log(request.params.id);
  return dbResponse = dbm.find<<%% capitalizedName %%>>ById(request.params.id);
  return dbResponse;
}

const find<<%% capitalizedPluralName %%>> = async (request, h) => {
  const dbResponse = dbm.find<<%% capitalizedPluralName %%>>(request.query);
  return dbResponse;
}

const update<<%% capitalizedName %%>> = async (request, h) => {
  const dbResponse = dbm.update<<%% capitalizedName %%>>(request.params.id, request.payload);
  return dbResponse;
}

const delete<<%% capitalizedName %%>> = async (request, hack) => {
  const dbResponse = dbm.delete<<%% capitalizedName %%>>(request.params.id);
  return dbResponse;
}


module.exports = {
  create<<%% capitalizedName %%>>,
  find<<%% capitalizedName %%>>,
  find<<%% capitalizedPluralName %%>>,
  update<<%% capitalizedName %%>>,
  delete<<%% capitalizedName %%>>
}
