/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [{
      cart_id: 1,
      comment: 'Квартира 100 квадратов',
      status: false,
      date: '10.11.2022',
      address: 'Санкт-Петербург, Дворцовая пл.',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
