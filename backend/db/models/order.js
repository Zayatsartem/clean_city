const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Comment }) {
      Order.User = Order.belongsTo(User, { foreignKey: 'user_id' });
      Order.Comment = Order.hasOne(Comment, { foreignKey: 'order_id' });
    }
  }
  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    rooms: {
      type: DataTypes.INTEGER,
    },
    bathrooms: {
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.TEXT,
    },
    time: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.TEXT,
    },
    address: {
      type: DataTypes.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  };
  const options = {
    sequelize,
    modelName: 'Order',
    tableName: 'Orders',
  };
  Order.init(attributes, options);
  return Order;
};
