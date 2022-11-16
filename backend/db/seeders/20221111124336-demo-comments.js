/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [{
      user_id: 3,
      order_id: 4,
      title: 'Сделали все очень супер! Оформлю подписку',
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 3,
      order_id: 3,
      title: 'Люблю погрязнее, но не в этот раз. И ребята справились с задачей на все 100!',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
