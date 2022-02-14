'use strict';

// const evals = Array(24)
// 	.fill(null)
// 	.map((curr, i) => {
//       if (i%2===0)return {interview: 1};
//     return {interview: 2}
// 	});

const evals = Array(120)
	.fill(null)
	.map((curr, i) => {
    i = i%10 + 1
    return {interview: i}
	});

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('evaluations', evals, {});

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
