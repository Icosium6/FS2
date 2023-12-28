const { Router } = require("express");
const courseController = require("../controllers/courseController");
const multer = require("../middleware/multerConfig");

const courseRouter = Router();

courseRouter.get("/courses", courseController.listCourse);

courseRouter.get("/courses/:id", courseController.getCourse);

courseRouter.delete("/courses/:id", courseController.deleteCourse);

//this doesn't upload the files, only details (title,desc,type,thumbnail)
courseRouter.post("/courses", multer.upload, courseController.createCourse);

courseRouter.put("/courses/:id", multer.upload, courseController.editCourse);

module.exports = courseRouter;
