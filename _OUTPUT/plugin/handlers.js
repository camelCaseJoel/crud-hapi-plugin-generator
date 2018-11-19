//const messages = require('./text/messages');
const dbm = require('../database/wrapper/branchSchedule'); // db methods


const createBranchSchedule = async (request, h) => {
  const dbResponse = dbm.createBranchSchedule(request.payload);
  return dbResponse;
}

const findBranchSchedule = async (request, h) => {
  console.log(request.params.id);
  return dbResponse = dbm.findBranchScheduleById(request.params.id);
  return dbResponse;
}

const findBranchSchedules = async (request, h) => {
  const dbResponse = dbm.findBranchSchedules(request.query);
  return dbResponse;
}

const updateBranchSchedule = async (request, h) => {
  const dbResponse = dbm.updateBranchSchedule(request.params.id, request.payload);
  return dbResponse;
}

const deleteBranchSchedule = async (request, hack) => {
  const dbResponse = dbm.deleteBranchSchedule(request.params.id);
  return dbResponse;
}


module.exports = {
  createBranchSchedule,
  findBranchSchedule,
  findBranchSchedules,
  updateBranchSchedule,
  deleteBranchSchedule
}
