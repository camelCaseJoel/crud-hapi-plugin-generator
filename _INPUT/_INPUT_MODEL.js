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
  PLURAL_MODEL_NAME: 'permissions',
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


sequelize.define('permission', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'ID',
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'NAME',
      unique: true
    }
  }, {
    tableName: 'Permission'
  });
