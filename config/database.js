var Sequelize = require("sequelize");
// DB name , username, password
let sequelize = new Sequelize("employeedb", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    idle: 10000
  },
  logging: false
});
