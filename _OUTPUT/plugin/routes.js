const Joi = require('joi');
const handlers = require('./handlers.js');
const description = require('./text/descriptions.js')

module.exports = [
{
  method: 'POST',
  path: '/api/permission',
  handler: handlers.createPermission,
  options: {
    description: description.createPermission,
    tags: ['api', 'permission'],
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
  path: '/api/permission/{id}',
  handler: handlers.findPermission,
  options: {
    description: description.findPermission,
    tags: ['api', 'permission'],
    auth: false
  }
},
{
  method: 'GET',
  path: '/api/permission',
  handler: handlers.findPermissions,
  options: {
    description: description.findPermissions,
    tags: ['api', 'permission'],
    auth: false
  }
},
{
  method: 'PATCH',
  path: '/api/permission/{id}',
  handler: handlers.updatePermission,
  options: {
    description: description.updatePermission,
    tags: ['api', 'permission'],
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
  path: '/api/permission/{id}',
  handler: handlers.deletePermission,
  options: {
    description: description.deletePermission,
    tags: ['api', 'permission '],
    auth: false
  }
}]
