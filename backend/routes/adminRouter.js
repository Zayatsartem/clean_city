const router = require('express').Router();

const { Order, User, Comment } = require('../db/models');

router.get('/new', async (req, res) => {
  const orders = await Order.findAll({
    include: [{ model: User, attributes: [] }], where: { status: 'new' }, raw: true, attributes: ['id', 'date', 'time', 'rooms', 'bathrooms', 'address', 'User.name', 'User.email', 'User.telephone'],
  });

  res.json({ orders });
});
router.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.findAll({
      include: [{ model: User, attributes: [] }, { model: Order, attributes: [] },
      ],
      where: { status: false },
      raw: true,
      attributes: ['id', 'title', 'User.name', 'Order.date'],
    });
    res.status(200).json({ comments });
  } catch ({ error }) {
    console.log(error);
  }
});
router.put('/new', async (req, res) => {
  const { id } = req.body;
  try {
    const newWIPOrder = await Order.findOne({
      where: { id },
    });
    await newWIPOrder.update({ status: 'inwork' });
    const orders = await Order.findAll({
      include: [{ model: User, attributes: [] }], where: { status: 'new' }, raw: true, attributes: ['id', 'date', 'time', 'rooms', 'bathrooms', 'address', 'User.name', 'User.email', 'User.telephone'],
    });
    const WIPorders = await Order.findAll({
      include: [{ model: User, attributes: [] }], where: { status: 'inwork' }, raw: true, attributes: ['id', 'date', 'time', 'rooms', 'bathrooms', 'address', 'User.name', 'User.email', 'User.telephone'],
    });
    res.status(200).json({ orders, WIPorders });
  } catch ({ error }) {
    console.log(error);
  }
});
router.delete('/new', async (req, res) => {
  const { id } = req.body;
  try {
    const newWIPOrder = await Order.findOne({
      where: { id },
    });
    await newWIPOrder.destroy();
    const orders = await Order.findAll({
      include: [{ model: User, attributes: [] }], where: { status: 'new' }, raw: true, attributes: ['id', 'date', 'time', 'rooms', 'bathrooms', 'address', 'User.name', 'User.email', 'User.telephone'],
    });

    res.status(200).json({ orders });
  } catch ({ error }) {
    console.log(error);
  }
});
router.get('/inwork', async (req, res) => {
  const orders = await Order.findAll({
    include: [{ model: User, attributes: [] }], where: { status: 'inwork' }, raw: true, attributes: ['id', 'date', 'time', 'rooms', 'bathrooms', 'address', 'User.name', 'User.email', 'User.telephone'],
  });

  res.json({ orders });
});
router.put('/inwork', async (req, res) => {
  const { id } = req.body;
  try {
    const deletingWIPOrder = await Order.findOne({
      where: { id },
    });
    await deletingWIPOrder.update({ status: 'completed' });

    const WIPorders = await Order.findAll({
      include: [{ model: User, attributes: [] }], where: { status: 'inwork' }, raw: true, attributes: ['id', 'date', 'time', 'rooms', 'bathrooms', 'address', 'User.name', 'User.email', 'User.telephone'],
    });
    res.status(200).json({ WIPorders });
  } catch ({ error }) {
    console.log(error);
  }
});
router.put('/comments', async (req, res) => {
  const { id } = req.body;
  try {
    const publishingComment = await Comment.findOne({
      where: { id },
    });
    await publishingComment.update({ status: true });

    const comments = await Comment.findAll({
      include: [{ model: User, attributes: [] }, { model: Order, attributes: [] },
      ],
      where: { status: false },
      raw: true,
      attributes: ['id', 'title', 'User.name', 'Order.date'],
    });
    res.status(200).json({ comments });
  } catch ({ error }) {
    console.log(error);
  }
});
router.delete('/comments', async (req, res) => {
  const { id } = req.body;
  try {
    const deletingComment = await Comment.findOne({
      where: { id },
    });
    await deletingComment.destroy();

    const comments = await Comment.findAll({
      include: [{ model: User, attributes: [] }, { model: Order, attributes: [] },
      ],
      where: { status: false },
      raw: true,
      attributes: ['id', 'title', 'User.name', 'Order.date'],
    });
    res.status(200).json({ comments });
  } catch ({ error }) {
    console.log(error);
  }
});
module.exports = router;
