const { DataTypes } = require('sequelize');
// const {Type} = require('../db');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo  
    sequelize.define('Pokemon', {
      id: {
         // type: DataTypes.INTEGER,
         type: DataTypes.UUID,
         defaultValue: DataTypes.UUIDV4,
         autoINcrement: true,
         primaryKey: true,
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      image: {
         type: DataTypes.STRING,
      },
      // id_Type: {
      //    type: DataTypes.INTEGER,
      //    // references: {
      //    //    model: Type,
      //    //    key: 'id',
      //    // }         
      // },
      life: {
         type: DataTypes.INTEGER,
         allowNull: false,
         defaultValue: 0,
         validate: {
           min: 0,
         },        
      },
      attack: {
         type: DataTypes.INTEGER,
         allowNull: false,
         defaultValue: 0,
         validate: {
           min: 0,
         },
      },
      defense: {
         type: DataTypes.INTEGER,
         allowNull: false,
         defaultValue: 0,
         validate: {
           min: 0,
         },
         
      },
      speed: {
         type: DataTypes.INTEGER,
         allowNull: false,
         defaultValue: 0,
         validate: {
           min: 0,
         },
      },
      height: {
         type: DataTypes.INTEGER,
         allowNull: false,
         defaultValue: 0,
         validate: {
           min: 0,
         },
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
         defaultValue: 0,
         validate: {
           min: 0,
         },
      },
   }, { timestamps: false });
};
