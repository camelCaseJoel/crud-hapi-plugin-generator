const capitalize = require('lodash.capitalize');
const camelCaseToDash = require('./utils').camelCaseToDash;

global.DATA_TO_INSERT_INTO_TEMPLATES = {};
global.finalData = DATA_TO_INSERT_INTO_TEMPLATES;


let sequelize = {}
sequelize.define = (name, fields) => {
  finalData.name = name;
  finalData.pluralName = ADDITIONAL_REQUIRED_INFO.PLURAL_MODEL_NAME;
  finalData.modelsToInclude = ADDITIONAL_REQUIRED_INFO.INCLUDE_THESE_MODELS;
  finalData.fields = fields;
  finalData.capitalizedName = capitalize( finalData.name[0] ) + finalData.name.substring(1);
  finalData.capitalizedPluralName = capitalize( finalData.pluralName[0] ) + finalData.pluralName.substring(1);
  finalData.dashName = camelCaseToDash( finalData.name );
  finalData.modelsToInclude = ADDITIONAL_REQUIRED_INFO.INCLUDE_THESE_MODELS;
  finalData.includes = () => {
    if(finalData.modelsToInclude.length > 0){
      console.log(finalData.modelsToInclude);
      let modelsString = finalData.modelsToInclude.join();

      return `
const find${finalData.capitalizedName}AndInclude = async (id) => {
  ${finalData.capitalizedName}.findAll({
    include: [
        ${modelsString}
    ]
  }).catch( err => {
    log(err);
    return err;
  });
}
      `;
    } else {
      console.log('==================== no extra models(no includes) ====================');
      return '';
    }
  };
}


 


global.sequelize = sequelize;
