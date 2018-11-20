const Sequelize = require('sequelize');
const db = require('./../db.js');
const <<%% capitalizedName %%>> = db.getModels().<<%% capitalizedName %%>>;
const log = require('../../util/utils/logging.js').logError;


const create<<%% capitalizedName %%>> = async (data) => {
  return <<%% capitalizedName %%>>.create(data).then( result => {
    return result;
  }).catch( err => {
    log(err);
    return err;
  });
}

const find<<%% capitalizedPluralName %%>> = async (queryParams) => {
  const queryParamsExist = !(Object.keys(queryParams).length === 0);
  // const queryKeysArr = Object.keys(queryParams);
  // const whereObj = {};

  // queryKeysArr.forEach(( k ) => {
  //   whereObj[ k ] = queryParams[ k ];
  // });

  //-------------------------------
  if(!queryParamsExist){
    return <<%% capitalizedName %%>>
      .findAll()
      .catch( err => {
        log(err);
        return err;
      });
  }else{
    return <<%% capitalizedName %%>>
      .findAll({where: queryParams})
      .catch( err => {
        log(err);
        return err;
      });
  }


}

const find<<%% capitalizedName %%>>ById = async (id) => {
  return <<%% capitalizedName %%>>
    .findById(id)
    .catch( err => {
      log(err);
      return err
    });
}

const update<<%% capitalizedName %%>> = async (id, data) => {
  return <<%% capitalizedName %%>>
    .update(data, { where:{ id: id } })
    .catch( err => {
      log(err);
      return err;
    });
}

const delete<<%% capitalizedName %%>> = async (id) => {
  return <<%% capitalizedName %%>>
  .destroy({ where:{ id: id } })
  .catch( err => {
    log(err);
    return err;
  });
}

module.exports = {
  create<<%% capitalizedName %%>>,
  find<<%% capitalizedPluralName %%>>,
  find<<%% capitalizedName %%>>ById,
  update<<%% capitalizedName %%>>,
  delete<<%% capitalizedName %%>>
};


<<%% includes %%>>