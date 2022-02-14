'use strict';
const {Interview} = require('../models/interview')

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('interviews',
     //applicant1
     [{
      interviewee: '0246c9b0-07c1-46b1-98fd-2fba1b164d71',
      phase: 'Profile'
     },
     {
      interviewee: '0246c9b0-07c1-46b1-98fd-2fba1b164d71',
      phase: 'Sys Design'
     },
     {
      interviewee: '0246c9b0-07c1-46b1-98fd-2fba1b164d71',
      phase: 'Leetcode'
     },
     {
      interviewee: '0246c9b0-07c1-46b1-98fd-2fba1b164d71',
      phase: 'Behavioral'
     },
     {
      interviewee: '0246c9b0-07c1-46b1-98fd-2fba1b164d71',
      phase: 'Screen'
     },

     //applicant2
     {
      interviewee: '19f20fd8-8dcd-45ed-abaa-1ef36d301c98',
      phase: 'Profile'
     },
     {
      interviewee: '19f20fd8-8dcd-45ed-abaa-1ef36d301c98',
      phase: 'Sys Design'
     },
     {
      interviewee: '19f20fd8-8dcd-45ed-abaa-1ef36d301c98',
      phase: 'Leetcode'
     },
     {
      interviewee: '19f20fd8-8dcd-45ed-abaa-1ef36d301c98',
      phase: 'Behavioral'
     },
     {
      interviewee: '19f20fd8-8dcd-45ed-abaa-1ef36d301c98',
      phase: 'Screen'
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
