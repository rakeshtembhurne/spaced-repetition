'use strict';
module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define('Card', {
    side1: DataTypes.STRING,
    side2: DataTypes.STRING,
    nextDate: DataTypes.DATE,
    prevDate: DataTypes.DATE,
    interval: DataTypes.INTEGER,
    reps: DataTypes.REAL,
    ef: DataTypes.REAL
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Card;
};