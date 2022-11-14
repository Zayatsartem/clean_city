const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order, User }) {
      Comment.belongsTo(Order, { foreignKey: 'order_id' });
      Comment.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Comment.init({
    user_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
