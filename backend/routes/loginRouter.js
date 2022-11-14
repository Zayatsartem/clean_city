const router = require('express').Router();

const bcrypt = require('bcrypt');

const { User } = require('../db/models');

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(401).json({ login: false, message: 'Неправильные email или пароль' });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare && user.email === email) {
      res.status(401).json({ login: false, message: 'Неправильные email или пароль' });
    }
    if (user.admin) {
      req.session.adminId = user.id;
    }
    req.session.userId = user.id;
    res.json({
      login: true,
      user: {
        id: user.id, email: user.email, admin: user.admin,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
