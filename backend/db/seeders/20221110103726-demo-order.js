/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [{
      user_id: 1,
      rooms: 2,
      bathrooms: 1,
      date: '10.11.2022',
      time: '14:00',
      status: 'inwork',
      address: 'Санкт-Петербург, Дворцовая пл.',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
