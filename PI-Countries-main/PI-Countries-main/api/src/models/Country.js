const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,  
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
      subregion: {
        type: DataTypes.STRING,
      },
      area: {
        type: DataTypes.STRING,
      },
      population: {
        type: DataTypes.STRING 
      }
    
  },{timestamps:false});
};
