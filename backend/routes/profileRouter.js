const router = require('express').Router();
const { User } = require('../db/models');

router.route('/').put(async (req, res) => {
  try {
    const user = req.session.userId;
    if (!user) {
      res.status(404).json({ message: 'Не удалось изменить профиль, авторизуйтесь' });
    } else {
      await User.update({
        name: req.body.name,
        email: req.body.email,
        telephone: req.body.telephone,
      }, {
        where: { id: req.session.userId },
      });
      res.status(200).json({ message: 'Профиль успешно изменен' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Не удалось изменить профиль' });
  }
});

module.exports = router;
