const Sequelize = require("sequelize");
const db = require("../config/database");
const express = require("express");
const Gig = db.define("gig", {
  EmpID: {
    type: Sequelize.STRING
  },
  Name: {
    type: Sequelize.STRING
  },
  EmpCode: {
    type: Sequelize.STRING
  },
  Salary: {
    type: Sequelize.STRING
  }
});

module.exports = Gig;
