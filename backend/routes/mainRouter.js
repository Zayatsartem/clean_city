const router = require('express').Router();
const fetch = require('node-fetch');
const { Comment } = require('../db/models');

router.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: {
        status: true,
      },
    });
    res.json({ comments });
  } catch ({ message }) {
    console.log(message);
    res.sendStatus(404);
  }
});

router.post('/request', async (req, res) => {
  const br = '%0A';
  const { CHAT_ID } = process.env;
  const { BOT } = process.env;
  try {
    if (req.body.rooms && req.body.bathrooms) {
      const { rooms, bathrooms, phone } = req.body;
      const text = `${rooms} квартира ${br}${bathrooms} ${br}Телефон: ${phone}`;
      await fetch(
        `https://api.telegram.org/bot${BOT}/sendMessage?chat_id=${CHAT_ID}&parse_mode=HTML&text=${text}`,
      );
      res.json({
        message:
          'Ваша заявка принята. В ближайшее время с вами свяжется менеджер чтобы уточнить детали заказа',
      });
    }
    if (req.body.comment) {
      const { phone, comment } = req.body;
      const text = `Телефон: ${phone}${br}Комментарий: ${comment}`;
      await fetch(
        `https://api.telegram.org/bot${BOT}/sendMessage?chat_id=${CHAT_ID}&parse_mode=HTML&text=${text}`,
      );
      res.json({
        message:
          'Ваша заявка принята. В ближайшее время с вами свяжется менеджер чтобы уточнить детали заказа',
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так' });
  }
});
module.exports = router;
