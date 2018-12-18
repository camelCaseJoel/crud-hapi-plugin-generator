const Sequelize = require('sequelize');
const db = require('./../db.js');
const <<%% capitalizedName %%>> = db.getModels().<<%% capitalizedName %%>>;
const log = require('../../util/utils/logging.js').logError;

/**
 * @function
 * @name    create<<%% capitalizedName %%>>
 * @param   {object} data - data for the object creation
 * @return  {Promise<Model>}
 */
const create<<%% capitalizedName %%>> = async (data) => <<%% capitalizedName %%>>.create(data);

/**
 * @function
 * @name    find<<%% capitalizedPluralName %%>>
 * @param   {object} params -search parameters
 * @return  {Promise<Array<Model>>}
 */
const find<<%% capitalizedPluralName %%>> = async (params = {}) => <<%% capitalizedName %%>>.findAll({ where: params} );

/**
 * @function
 * @name    find<<%% capitalizedName %%>>ById
 * @param   {number} id - id of <<%% capitalizedName %%>>
 * @return  {Promise<Model>}
 */
const find<<%% capitalizedName %%>>ById = async (id) => <<%% capitalizedName %%>>.findById(id);

/**
 * @function
 * @name    update<<%% capitalizedName %%>>
 * @param   {number} id - record id to update
 * @param   {object} data -data to update
 * @return  {Promise<Array[affectedCount, affected rows]>}
 */
const update<<%% capitalizedName %%>> = async (id, data) => <<%% capitalizedName %%>>.update(data, { where:{ id } });

/**
 * @function
 * @name    delete<<%% capitalizedName %%>>
 * @param   {number} id - id of the <<%% capitalizedName %%>> to delete
 * @return  {Promise<Number>}
 */
const delete<<%% capitalizedName %%>> = async (id) => <<%% capitalizedName %%>>.destroy({ where:{ id } });

<<%% includes %%>>

module.exports = {
  create<<%% capitalizedName %%>>,
  find<<%% capitalizedPluralName %%>>,
  find<<%% capitalizedName %%>>ById,
  update<<%% capitalizedName %%>>,
  delete<<%% capitalizedName %%>>
};
