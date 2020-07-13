const Sequelize = require('sequelize');
var sequelize = require('../config/database');
var Role = require('./Role');

//create user table
var User = sequelize.define(
    'user', 
    {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
        name: Sequelize.STRING(30),
        email: Sequelize.STRING(30),
        password: Sequelize.STRING(20),
        phone: {
            type : Sequelize.BIGINT(12).ZEROFILL.UNSIGNED,
        },
        roleId: {
        type: Sequelize.INTEGER(11),
        // This is a reference to another model
        references: {
            model: Role,
            key: 'id'
            }
        }
    },
  {
    freezeTableNama : true,
    timestamps: false,
  });
  
  User.belongsTo(Role);
  
  module.exports = User;