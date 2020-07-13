var Sequelize = require('sequelize');
//database configuration
const sequelize = new Sequelize(
  'manajuser_db',
  'root',
  'root123',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.sync({});

module.exports = sequelize;