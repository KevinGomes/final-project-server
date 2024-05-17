/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING, //string, first name of student, not nullable
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING, //string, last name of student, not nullable
    allowNull: false
  },

  email: {
    type: Sequelize.STRING, //string, email address of student, not nullable
    allowNull: false
  },

  imageurl: {
    type: Sequelize.STRING, //string, url of image for student, nullable
  },

  gpa: {
    type: Sequelize.FLOAT, //float, grade point average of student, not nullable
    allowNull: false,
    validate: {
      min: 0,
      max: 4
  }
  }
});

// Export the student model
module.exports = Student;