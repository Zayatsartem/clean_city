const router = require('express').Router();
const { Comment } = require('../db/models');

router.post('/', async (req, res) => {
  const { user } = res.locals;
  const { data } = req.body;
  console.log(data);
  await Comment.create({
    user_id: user.id,
    order_id: data.orderId,
    title: data.title,
    status: false,
    stars: data.stars,
  });
  res.status(200).json({ message: 'success' });
});

module.exports = router;
