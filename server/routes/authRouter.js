const { Router } = require("express");
const authController = require("../controllers/authController");
const authRouter = Router();

authRouter.post("/signup", authController.signup);
authRouter.post("/login", authController.login_req);
authRouter.get("/logout", authController.logout);
authRouter.post("/reset-pwd", authController.resetPwd);

module.exports = authRouter;
