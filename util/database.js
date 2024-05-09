require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
  }
);

module.exports = sequelize;

/* use mysql2 */

// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "127.0.0.1",
//   user: "root",
//   database: "nodejs_project",
//   password: "Wasd1234!",
// });

// module.exports = pool.promise();
