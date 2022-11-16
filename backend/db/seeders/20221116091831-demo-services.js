/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Services',
      [
        {
          title: 'Убрать балкон',
          price: 500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Погладить вещи',
          price: 600,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Помыть люстру',
          price: 500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Помыть окно',
          price: 400,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Помыть балконное остелкение',
          price: 800,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Помыть холодильник внутри',
          price: 600,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Помыть духовку',
          price: 500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Помыть микроволновку',
          price: 400,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Помыть кухонные шкафы',
          price: 700,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Помыть лоток питомца',
          price: 300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Удалить плесень',
          price: 500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Services', null, {});
  },
};
