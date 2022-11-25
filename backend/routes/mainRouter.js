const router = require('express').Router();
const fetch = require('node-fetch');
const { Comment, User, Order } = require('../db/models');

router.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.findAll({
      include: [
        { model: User, attributes: [] },
        { model: Order, attributes: [] },
      ],
      where: {
        status: true,
      },
      raw: true,
      attributes: ['id', 'title', 'User.name', 'Order.date'],
    });
    res.json({ comments });
  } catch ({ message }) {
    res.sendStatus(404);
  }
});

router.post('/request', async (req, res) => {
  const br = '%0A';
  const { CHAT_ID, BOT } = process.env;
  const isStandartOrder = req.body.rooms && req.body.bathrooms;

  if (isStandartOrder) {
    const { rooms, bathrooms, phone } = req.body;
    res.locals.text = `${rooms} квартира ${br}${bathrooms} ${br}Телефон: ${phone}`;
  }

  if (!isStandartOrder) {
    const { phone, comment } = req.body;
    res.locals.text = `Телефон: ${phone}${br}Комментарий: ${comment}`;
  }

  try {
    const url = `https://api.telegram.org/bot${BOT}/sendMessage?chat_id=${CHAT_ID}&parse_mode=HTML&text=${res.locals.text}`;
    await fetch(url);
    return res.json({
      message:
        'Ваша заявка принята. В ближайшее время с вами свяжется менеджер чтобы уточнить детали заказа',
    });
  } catch (error) {
    return res.status(500).json({ message: 'Что-то пошло не так' });
  }
});
module.exports = router;
