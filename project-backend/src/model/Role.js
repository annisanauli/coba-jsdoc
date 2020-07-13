const Sequelize = require('sequelize');
var sequelize = require('../config/database');

//create role table
var Role = sequelize.define('role', {
  role: Sequelize.STRING
},
{
  freezeTableNama : true,
	timestamps: false,
});

module.exports = Role