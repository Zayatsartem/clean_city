const router = require('express').Router();

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
  }
});
module.exports = router;
