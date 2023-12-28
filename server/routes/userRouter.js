const { Router } = require("express");
const userController = require("../controllers/userController");
const requireAuth = require("../middleware/authMiddleware");
const userRouter = Router();

userRouter.get("/users", userController.listUsers);

userRouter.get("/users/:id", userController.getUser);

userRouter.delete("/users/:id", userController.deleteUser);

userRouter.get("/users/:id/verify/:token/", userController.verifyUser);

userRouter.get("/users/:id/reset/:token/", userController.verifyPwd);

userRouter.get("/getUser", userController.checkUser);

userRouter.patch("/users/change-pwd", userController.changePwd);

module.exports = userRouter;
