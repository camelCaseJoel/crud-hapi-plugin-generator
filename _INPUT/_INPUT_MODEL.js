//
//  ______    _ _                 _   _                          _
// |  ____|  | | |               | | | |                        | |                _
// | |__ ___ | | | _____      __ | |_| |__   ___  ___  ___   ___| |_ ___ _ __  ___(_)
// |  __/ _ \| | |/ _ \ \ /\ / / | __| '_ \ / _ \/ __|/ _ \ / __| __/ _ \ '_ \/ __|
// | | | (_) | | | (_) \ V  V /  | |_| | | |  __/\__ \  __/ \__ \ ||  __/ |_) \__ \_
// |_|  \___/|_|_|\___/ \_/\_/    \__|_| |_|\___||___/\___| |___/\__\___| .__/|___(_)
//                                                                      | |
//                                                                      |_|
// ================================== STEP #1 ======================================
// ------------------------- additional required info ------------------------------
// =================================================================================
// Instructions:
// --> Rule #1 : Don't change the properties' names
// --> Rule #2 : Only fill the values of the properties with STRING.
// --> Following the previous 2 rules, write the following required information:

global.ADDITIONAL_REQUIRED_INFO = {
  // Write the following required information:
  PLURAL_MODEL_NAME: 'branches',
  INCLUDE_THESE_MODELS: []
}

// ================================== STEP #2 ======================================
// ----------------------- Paste Model definition code -----------------------------
// =================================================================================
// Instructions:
// --> Copy your Model Definition code(just like it is, don't modify it)
// --> Paste your Model Definition after these comments
// --> If there is any code following these comments, delete it, before pasting yours
// --> After pasting your code, save the file
// --> After saving the file, go to root folder and run:  node generator.js
// --> Your generated PLUGIN will be in the _OUTPUT folder



sequelize.define('branch', {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    field: 'ID',
    autoIncrement: true
  },
  address: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'ADDRESS'
  },
  phone: {
    type: DataTypes.STRING(10),
    allowNull: false,
    field: 'PHONE'
  },
  chatNo: {
    type: DataTypes.STRING(10),
    allowNull: false,
    field: 'CHAT_NO'
  },
  companyId: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references: {
      model: 'Company',
      key: 'id'
    },
    field: 'COMPANY_ID'
  },
  managerId: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references: {
      model: 'Manager',
      key: 'id'
    },
    field: 'MANAGER_ID'
  },
  sectorId: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references: {
      model: 'Sector',
      key: 'id'
    },
    field: 'SECTOR_ID'
  }
}, {
  tableName: 'Branch'
});

