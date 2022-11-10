const router = require('express').Router();

router.route('/').get((req, res) => {
  console.log('server fetch');
  try {
    req.session.destroy();
    res.clearCookie('user_uid');
    res.status(200).json({ status: true });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
