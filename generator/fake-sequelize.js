const capitalize = require('lodash.capitalize');

global.DATA_TO_INSERT_INTO_TEMPLATES = {};
global.finalData = DATA_TO_INSERT_INTO_TEMPLATES;


let sequelize = {}
sequelize.define = (name, fields) => {
  finalData.name = name;
  finalData.pluralName = ADDITIONAL_REQUIRED_INFO.PLURAL_MODEL_NAME;
  finalData.fields = fields;

  finalData.capitalizedName =
    capitalize( finalData.name[0] ) + finalData.name.substring(1);
    
  finalData.capitalizedPluralName =
    capitalize( finalData.pluralName[0] ) + finalData.pluralName.substring(1);
}









global.sequelize = sequelize;
