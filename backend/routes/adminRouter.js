const router = require('express').Router();

const { Order, User } = require('../db/models');

router.get('/new', async (req, res) => {
  const orders = await Order.findAll({
    include: [{ model: User, attributes: [] }], where: { status: 'new' }, raw: true, attributes: ['id','date', 'time', 'rooms', 'bathrooms', 'address', 'User.name', 'User.email', 'User.telephone'],
  });
  
  res.json({ orders });
});
router.get('/inwork', async (req, res) => {
  const orders = await Order.findAll({
    include: [{ model: User, attributes: [] }], where: { status: 'inwork' }, raw: true, attributes: ['id','date', 'time', 'rooms', 'bathrooms', 'address', 'User.name', 'User.email', 'User.telephone'],
  });
  
  res.json({ orders });
});

module.exports = router;
