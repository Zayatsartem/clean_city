const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cart }) {
      Order.belongsTo(Cart, { foreignKey: 'cart_id' });
    }
  }
  Order.init({
    cart_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    date: DataTypes.TEXT,
    address: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
