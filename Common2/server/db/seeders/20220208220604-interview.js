'use strict';
const {Interview} = require('../models/interview')

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('interviews',
     [{
      // id: 1,
      interviewee: '0246c9b0-07c1-46b1-98fd-2fba1b164d71',
     },
     {
      // id: 1,
      interviewee: '0246c9b0-07c1-46b1-98fd-2fba1b164d71',
     },
     {
      // id: 1,
      interviewee: '0246c9b0-07c1-46b1-98fd-2fba1b164d71',
     },
     {
      // id: 1,
      interviewee: '0246c9b0-07c1-46b1-98fd-2fba1b164d71',
     },
     {
      // id: 1,
      interviewee: '0246c9b0-07c1-46b1-98fd-2fba1b164d71',
     }]
     , {});

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
