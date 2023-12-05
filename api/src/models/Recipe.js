const { DataTypes } = require( "sequelize" );
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'recipe',
    {
      id:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
      summary: {
        type: DataTypes.STRING,
        allowNull: false,
    },
      healthScore:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate:{ min: 0, max: 100 } 
    },
      image:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "https://postresoriginales.com/wp-content/uploads/2018/06/Ingredientes-para-reposteria-02.jpg",
        validate: {isUrl: true}
    },
      steps:{
        type: DataTypes.STRING,
    },
      create:{
        type : DataTypes.BOOLEAN,
        defaultValue : true,
    },
      costo:{
        type: DataTypes.INTEGER,
        allowNull: false,

      }
  },
  {
    timestamps: false
  }
 );
};