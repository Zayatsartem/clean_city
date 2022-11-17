const router = require('express').Router();
const { User, Order } = require('../db/models');

router.route('/orders').get(async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: res.locals.userId,
      },
    });
    const orders = await Order.findAll({
      where: {
        user_id: user.id,
      },
    });
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json('Ошибка загрузки заказов');
  }
});

router.route('/').put(async (req, res) => {
  try {
    const userSession = req.session.userId;
    if (!userSession) {
      res.status(404).json({ message: 'Не удалось изменить профиль, авторизуйтесь' });
    } else {
      const user = await User.findOne({
        where: {
          id: req.body.id,
        },
      });
      await user.update({
        name: req.body.name,
        email: req.body.email,
        telephone: req.body.telephone,
      });
      res.status(200).json({
        message: 'Профиль успешно изменен',
        user: { name: user.name, email: user.email, telephone: user.telephone },
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Не удалось изменить профиль' });
  }
});

module.exports = router;
