const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter the course name"],
  },
  description: {
    type: String,
    required: [true, "please provide a description for this course"],
  },
  thumbnail: {
    type: String,
    required: true,
  },
  featured: { type: Boolean, default: false },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
