import express from "express";
import {
  signupController,
  loginController,
} from "../controller/userController";
import {
  registrationMiddleware,
  existingUser,
  loginMiddleware,
} from "../middleware/validationMiddleware";
const userRouter = express.Router();

userRouter.post(
  "/register",
  registrationMiddleware,
  existingUser,
  signupController,
);

userRouter.post("/login", loginMiddleware, existingUser, loginController);

export default userRouter;
