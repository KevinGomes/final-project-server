/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING, //string, name of campus, not nullable
    allowNull: false
  },

  address: {
    type: Sequelize.STRING, //string, address of campus, not nullable
    allowNull: false
  },

  description: {
    type: Sequelize.STRING, //string, description of campus, nullable
  },

  imageurl: {
    type: Sequelize.STRING, //string, url of image for campus, nullable
  }
});

// Export the campus model
module.exports = Campus;