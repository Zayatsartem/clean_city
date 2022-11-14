/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [{
      user_id: 1,
      order_id: 2,
      title: 'Хочу чтобы было чисто',
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      order_id: 1,
      title: 'Люблю погрязнее, но не в этот раз',
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
