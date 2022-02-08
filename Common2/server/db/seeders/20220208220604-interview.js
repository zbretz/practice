'use strict';
const {Interview} = require('../models/interview')

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


    //  await queryInterface.bulkInsert('interviews',
    //  [{
    //   id: {
    //     type: 'INTEGER',
    //     primaryKey: true,
    //     autoIncrement: true
    //   },
    //   interviewee: {
    //     type: 'UUID',
    //     allowNull: false,
    //     references: {
    //       model: 'applicants',
    //       key: 'user_id'
    //     },
    //     onDelete: 'CASCADE'
    //   },
    //  }]
    //  , {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
