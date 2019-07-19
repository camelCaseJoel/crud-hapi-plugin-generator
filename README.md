CRUD Generator
==============

This is a CRUD ( create, read, update, delete ) code generator. It generates Hapi.js plugins that wrap CRUD code in the form of web REST API. The CRUD code will be generated from a **Sequelize(ORM) Model** that you have to provide. The generator will take the provided Model code and generate all the needed files(JavaScript files) to create a hapi.js plugin that exposes a CRUD web API.

Example and 'how to use it':
----------------------------

1. Let's say we have a Sequelize Model named "Permission" in your app:

``` 
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
```

2. All you need to do is copy this code and paste it in the file **_INPUT/INPUT_MODEL.js** following the instructions described in the file.

3. Next, run 