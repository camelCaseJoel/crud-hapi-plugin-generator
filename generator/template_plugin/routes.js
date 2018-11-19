const Joi = require('joi');
const handlers = require('./handlers.js');
const description = require('./text/descriptions.js')

module.exports = [
{
  method: 'POST',
  path: '/api/<<%% dashName %%>>',
  handler: handlers.create<<%% capitalizedName %%>>,
  options: {
    description: description.create<<%% capitalizedName %%>>,
    tags: ['api', '<<%% name %%>>'],
    auth: false
    // ,
    // validate: {
    //   payload: {
    //     address: Joi.string().required(),
    //     phone: Joi.string().required(),
    //     chatNo: Joi.string().required(),
    //     companyId: Joi.number(),
    //     managerId: Joi.number(),
    //     sectorId: Joi.number()
    //   },
    //   failAction: handlers.error
    // }
  }
},
{
  method: 'GET',
  path: '/api/<<%% dashName %%>>/{id}',
  handler: handlers.find<<%% capitalizedName %%>>,
  options: {
    description: description.find<<%% capitalizedName %%>>,
    tags: ['api', '<<%% name %%>>'],
    auth: false
  }
},
{
  method: 'GET',
  path: '/api/<<%% dashName %%>>',
  handler: handlers.find<<%% capitalizedPluralName %%>>,
  options: {
    description: description.find<<%% capitalizedPluralName %%>>,
    tags: ['api', '<<%% name %%>>'],
    auth: false
  }
},
{
  method: 'PATCH',
  path: '/api/<<%% dashName %%>>/{id}',
  handler: handlers.update<<%% capitalizedName %%>>,
  options: {
    description: description.update<<%% capitalizedName %%>>,
    tags: ['api', '<<%% name %%>>'],
    auth: false
    // ,
    // validate: {
    //   payload: {
    //     address: Joi.string().required(),
    //     phone: Joi.string().required(),
    //     chatNo: Joi.string().required(),
    //     companyId: Joi.number(),
    //     managerId: Joi.number(),
    //     sectorId: Joi.number()
    //   },
    //   failAction: handlers.error
    // }
  }
},
{
  method: 'DELETE',
  path: '/api/<<%% dashName %%>>/{id}',
  handler: handlers.delete<<%% capitalizedName %%>>,
  options: {
    description: description.delete<<%% capitalizedName %%>>,
    tags: ['api', '<<%% name %%>> '],
    auth: false
  }
}]
