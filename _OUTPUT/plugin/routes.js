const Joi = require('joi');
const handlers = require('./handlers.js');
const description = require('./text/descriptions.js')

module.exports = [
{
  method: 'POST',
  path: '/api/branchSchedule',
  handler: handlers.createBranchSchedule,
  options: {
    description: description.createBranchSchedule,
    tags: ['api', 'branchSchedule'],
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
  path: '/api/branchSchedule/{id}',
  handler: handlers.findBranchSchedule,
  options: {
    description: description.findBranchSchedule,
    tags: ['api', 'branchSchedule'],
    auth: false
  }
},
{
  method: 'GET',
  path: '/api/branchSchedule',
  handler: handlers.findBranchSchedules,
  options: {
    description: description.findBranchSchedules,
    tags: ['api', 'branchSchedule'],
    auth: false
  }
},
{
  method: 'PATCH',
  path: '/api/branchSchedule/{id}',
  handler: handlers.updateBranchSchedule,
  options: {
    description: description.updateBranchSchedule,
    tags: ['api', 'branchSchedule'],
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
  path: '/api/branchSchedule/{id}',
  handler: handlers.deleteBranchSchedule,
  options: {
    description: description.deleteBranchSchedule,
    tags: ['api', 'branchSchedule '],
    auth: false
  }
}]
