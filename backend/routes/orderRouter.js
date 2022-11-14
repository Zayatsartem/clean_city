const router = require('express').Router();

const { Order } = require('../db/models');

router.post('/', async (req, res) => {
  const { rooms, bathrooms, date, time, address, user_id } = req.body;

  if (req.session.userId === user_id) {
    try {
      const newOrder = await Order.create({
        user_id: req.session.userId,
        rooms: Number(rooms),
        bathrooms: Number(bathrooms),
        date,
        time,
        status: 'new',
        address,
      });
      newOrder.save();
      res.json({
        order: true,
      });
    } catch ({ message }) {
      // todo res.json
      console.log(message);
    }
  }
});

module.exports = router;
