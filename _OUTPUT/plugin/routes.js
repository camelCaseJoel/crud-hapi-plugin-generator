const Joi = require('joi');
const handlers = require('./handlers.js');
const description = require('./text/descriptions.js')

module.exports = [
{
  method: 'POST',
  path: '/api/branch',
  handler: handlers.createBranch,
  options: {
    description: description.createBranch,
    tags: ['api', 'branch'],
    auth: false,
    validate: {
      payload: {
        address: Joi.string().required(),
        phone: Joi.string().required(),
        chatNo: Joi.string().required(),
        companyId: Joi.number(),
        managerId: Joi.number(),
        sectorId: Joi.number()
      },
      failAction: handlers.error
    }
  }
},
{
  method: 'GET',
  path: '/api/branch/{id}',
  handler: handlers.findBranch,
  options: {
    description: description.findBranch,
    tags: ['api', 'branch'],
    auth: false
  }
},
{
  method: 'GET',
  path: '/api/branch',
  handler: handlers.findBranches,
  options: {
    description: description.findBranches,
    tags: ['api', 'branch'],
    auth: false
  }
},
{
  method: 'PATCH',
  path: '/api/branch/{id}',
  handler: handlers.updateBranch,
  options: {
    description: description.updateBranch,
    tags: ['api', 'branch'],
    auth: false,
    validate: {
      payload: {
        address: Joi.string().required(),
        phone: Joi.string().required(),
        chatNo: Joi.string().required(),
        companyId: Joi.number(),
        managerId: Joi.number(),
        sectorId: Joi.number()
      },
      failAction: handlers.error
    }
  }
},
{
  method: 'DELETE',
  path: '/api/branch/{id}',
  handler: handlers.deleteBranch,
  options: {
    description: description.deleteBranch,
    tags: ['api', 'branch'],
    auth: false
  }
}]
