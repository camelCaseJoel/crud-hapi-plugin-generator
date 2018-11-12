global.DATA_TO_INSERT_INTO_TEMPLATES = {};
global.finalData = DATA_TO_INSERT_INTO_TEMPLATES;


let sequelize = {}
sequelize.define = (name, fields) => {
  finalData.name = name;
  finalData.pluralName = ADDITIONAL_REQUIRED_INFO.PLURAL_MODEL_NAME;
  finalData.fields = fields;
}









global.sequelize = sequelize;
