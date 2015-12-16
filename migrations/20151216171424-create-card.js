'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      side1: {
        type: Sequelize.STRING
      },
      side2: {
        type: Sequelize.STRING
      },
      nextDate: {
        type: Sequelize.DATE
      },
      prevDate: {
        type: Sequelize.DATE
      },
      interval: {
        type: Sequelize.NUMBER
      },
      reps: {
        type: Sequelize.NUMBER
      },
      ef: {
        type: Sequelize.NUMBER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Cards');
  }
};