'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Task, {
        foreignKey: 'userId',
      })
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    refreshToken: DataTypes.STRING,
    role: DataTypes.ENUM('5045', '2097', '1352'),
    status: DataTypes.BOOLEAN,
    created_at: DataTypes.DateTime,
    updated_at: DataTypes.DateTime,
    deleted_at: DataTypes.DateTime,
  }, {
    sequelize,
    modelName: 'User',
    underscored: true,
  });
  return User;
};