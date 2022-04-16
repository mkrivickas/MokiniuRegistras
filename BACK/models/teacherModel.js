const mongoose = require("mongoose");

// DB schema
const teachersSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  birthdate: {
    type: Date,
  },
  program: {
    type: String,
  },
  town: {
    type: String,
  },
  group: {
    type: String,
  },
});

// Modelis DB lentelės pavadinimas
const Teachers = new mongoose.model("Teachers", teachersSchema);

Duomenų siuntimas į DB
const testTeachers = new Teachers({
  name: "Justina",
  surname: "Balse",
  birthdate: "very young",
  program: "JavaScript",
  town: "Vilnius",
  group: "JS-21/3",
});

testTeachers.save();

module.exports = Teachers;
