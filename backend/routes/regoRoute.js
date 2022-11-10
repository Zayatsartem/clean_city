const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/', async (req, res) => {
  const {
    username, password, email, passwordconfirm,
  } = req.body;

  const userEmail = await User.findOne({
    where: {
      email,
    },
    raw: true,
  });
  if (userEmail) {
    return res.json({ registration: false, message: 'This email is already in use' });
  }
  if (password !== passwordconfirm) {
    return res.json({ registration: false, message: 'Passwords are not the same' });
  }
  if (password.length < 8) {
    return res.json({ registration: false, message: 'Password should contain more than 7 symbols' });
  }
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({
      name: username,
      email,
      password: hashedPassword,
      count: 0,
    });
    newUser.save();

    req.session.userId = newUser.id;
    res.json({
      registration: true,
      user: {
        id: newUser.id, name: newUser.name, email: newUser.email, count: newUser.count,
      },
    });
  } catch ({ message }) {
    console.log(message);
  }
});
module.exports = router;
