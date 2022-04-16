const mongoose = require("mongoose");

// DB schema
const studentsSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastname: {
    type: String,
  },
  date: {
    type: Date,
  },
  program: {
    type: String,
  },
  city: {
    type: String,
  },
  group: {
    type: String,
  },
});

// Modelis DB lentelės pavadinimas
const Students = new mongoose.model("Students", studentsSchema);

// Duomenų siuntimas į DB
// const testStudents = new Students({
//   name: "Kotryna",
//   surname: "Krivickaite",
//   birthdate: "2014-12-03",
//   program: "JavaScript",
//   town: "Panevezys",
//   group: "1",
// });

// testStudents.save();

module.exports = Students;
