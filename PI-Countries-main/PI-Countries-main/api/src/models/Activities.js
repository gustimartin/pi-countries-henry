const { DataTypes, UUIDV4 } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('activities', {
  
    name: {
      type: DataTypes.STRING,
      allowNull:false
  
    },
    dificulty:{
     type: DataTypes.ENUM('1', '2', '3', '4', '5'),
     allowNull: false
    },
    duration: { 
     type: DataTypes.STRING,
     allowNull: false
    },
    season: { 
     type: DataTypes.ENUM('summer','autumn', 'winter','spring')
    }
},{timestamps:false});
};
