const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/', async (req, res) => {
  const {
    name, password, email, telephone,
  } = req.body;

  if (!name || !email) {
    res.status(422).json({ error: 'поле не должно быть пустым' });
    return;
  }

  if (password.length < 7) {
    res.json({
      registration: false,
      error: 'пароль должен быть более 7 символов',
    });
    return;
  }

  const regexp = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;
  const emailCheck = regexp.test(email);
  if (!emailCheck) {
    res.status(422).json({ error: 'Неверно указан почтовый адрес' });
    return;
  }

  try {
    const userEmail = await User.findOne({
      where: {
        email,
      },
      raw: true,
    });
    if (userEmail) {
      res.status(422).json({ error: 'Такой пользователь уже есть' });
      return;
    }
  } catch ({ message }) {
    // todo res.json
    console.log(message);
  }

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      telephone,
      admin: false,
    });
    newUser.save();

    // кладём id нового пользователя в хранилище сессии (сразу логиним пользователя)
    if (newUser.admin) {
      req.session.adminId = newUser.id;
    }
    req.session.userId = newUser.id;
    res.json({
      registration: true,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        telephone: newUser.telephone,
        admin: newUser.admin,
      },
    });
  } catch ({ message }) {
    // todo res.json
    console.log(message);
  }
});
module.exports = router;
