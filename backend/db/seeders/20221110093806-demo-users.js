/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: process.env.DEMO_USER_NAME,
          email: process.env.DEMO_USER_EMAIL,
          password: await bcrypt.hash(process.env.DEMO_USER_PASSWORD, 10),
          telephone: process.env.DEMO_USER_TELEPHONE,
          admin: process.env.DEMO_USER_ADMIN,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Алеша',
          email: 'alex@mail.ru',
          password: await bcrypt.hash('12345678', 10),
          telephone: '+7456789342',
          admin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Татьяна',
          email: 'kate@mail.com',
          password: await bcrypt.hash('12345678', 10),
          telephone: '+720027446748',
          admin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Марина',
          email: 'mary@mail.com',
          password: await bcrypt.hash('12345678', 10),
          telephone: '+79928266748',
          admin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Петр Иванович',
          email: 'petya@mail.com',
          password: await bcrypt.hash('12345678', 10),
          telephone: '+70123936748',
          admin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Святослав',
          email: 'svet@mail.com',
          password: await bcrypt.hash('12345678', 10),
          telephone: '+7938366333',
          admin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
