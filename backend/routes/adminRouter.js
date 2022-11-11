const router = require('express').Router();

const { Order, User } = require('../db/models');

router.get('/new', async (req, res) => {
  const orders = await Order.findAll({
    include: [{ model: User, attributes: [] }], where: { status: 'inwork' }, raw: true, attributes: ['date', 'time', 'rooms', 'bathrooms', 'address', 'User.name', 'User.email', 'User.telephone'],
  });
  console.log(orders);
  res.json({ orders });
});

module.exports = router;
