const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/', async (req, res) => {
  const { name, password, email, telephone } = req.body;
  console.log(req.body);

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
  if (password.length < 8) {
    return res.json({
      registration: false,
      error: 'Password should contain more than 7 symbols',
    });
  }
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      telephone,
    });
    newUser.save();

    // кладём id нового пользователя в хранилище сессии (сразу логиним пользователя)
    req.session.userId = newUser.id;
    res.json({
      registration: true,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        telephone: newUser.telephone,
      },
    });
  } catch ({ message }) {
    console.log(message);
  }
});
module.exports = router;
