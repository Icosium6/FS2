const mongoose = require("mongoose");
const fs = require("fs");

const chapterSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter the chapter title"],
  },
  description: {
    type: String,
    required: [true, "Please enter the chapter description"],
  },
  files: {
    type: [String],
    default: [],
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
});

chapterSchema.pre(["findOneAndDelete", "deleteMany"], async function (next) {
  try {
    const chapterToDelete = await Chapter.findOne(this);

    for (const file of chapterToDelete.files) {
      fs.unlinkSync(file);
      // console.log(`Deleted file: ${file}`);
    }
    next();
  } catch (error) {
    next(error);
  }
});

const Chapter = mongoose.model("Chapter", chapterSchema);

module.exports = Chapter;
