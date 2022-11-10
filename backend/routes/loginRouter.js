const router = require('express').Router();

const bcrypt = require('bcrypt');

const { User } = require('../db/models');

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { name: username } });
    if (!user) {
      res.json({ login: false, message: 'Неправильные email или пароль' });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare && user.name === username) {
      res.json({ login: false, message: 'Неправильные email или пароль' });
    }
    req.session.userId = user.id;

    res.json({
      login: true,
      user: {
        id: user.id, name: user.name, email: user.email, count: user.count,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
