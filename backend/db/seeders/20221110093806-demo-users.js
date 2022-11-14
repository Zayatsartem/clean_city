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
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
