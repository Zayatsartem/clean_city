const router = require('express').Router();

const { Order, Service } = require('../db/models');

router.post('/', async (req, res) => {
  const { rooms, bathrooms, date, time, address, user_id, checkbox } = req.body;

  if (!rooms || !bathrooms || !date || !time || !address) {
    res.status(422).json({ error: 'поле не должно быть пустым' });
    return;
  }

  const services = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < checkbox.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    const service = await Service.findOne({ where: { id: Number(checkbox[i]) } });
    services.push(service);
  }

  const priceServices = services.map((el) => el.price).reduce((x, y) => x + y, 0);
  const totalPrice = rooms * 1000 + bathrooms * 1000 + priceServices;
  const servicesTitle = services.map((el) => el.title);
  console.log(totalPrice);

  if (req.session.userId === user_id) {
    try {
      const newOrder = await Order.create({
        user_id: req.session.userId,
        rooms: Number(rooms),
        bathrooms: Number(bathrooms),
        price: totalPrice,
        services: servicesTitle.join(', '),
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
      console.log(message);
      res.sendStatus(404);
    }
  }
});

module.exports = router;
