const messages = require('./text/messages');
const dbm = require('../database/wrapper/branch'); // db methods


const createBranch = async (request, h) => {
  const dbResponse = dbm.createBranch(request.payload);
  return dbResponse;
}

const findBranch = async (request, h) => {
  console.log(request.params.id);
  return dbResponse = dbm.findBranchById(request.params.id);
  return dbResponse;
}

const findBranches = async (request, h) => {
  const dbResponse = dbm.findBranches(request.query);
  return dbResponse;
}

const updateBranch = async (request, h) => {
  const dbResponse = dbm.updateBranch(request.params.id, request.payload);
  return dbResponse;
}

const deleteBranch = async (request, hack) => {
  const dbResponse = dbm.deleteBranch(request.params.id);
  return dbResponse;
}


module.exports = {
  createBranch,
  findBranch,
  findBranches,
  updateBranch,
  deleteBranch
}
