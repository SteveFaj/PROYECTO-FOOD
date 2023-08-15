const { DataTypes } = require ("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        'diet', 
        {
          name:{
            type: DataTypes.STRING,
            allownull:false,
            },
          },
    {
        timestamps: false
    }
   );
};