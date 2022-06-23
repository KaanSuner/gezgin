import express from "express";
const router = express.Router();
import {
  register,
  login,
  activation,
  access,
  forgot,
  reset,
  info,
  update,
  logout,
  reset2,
} from "../controllers/ctrlAuth.js";
import {auth} from "../middlewares/auth.js";

//REGISTER
router.post("/register", register);

//ACTIVATION
router.post("/activation", activation);

//LOGIN
router.post("/login", login);

//ACCESS
router.post("/access", access);

//Forgot password
router.post("/forgot-password", forgot);

//Reset password
router.post("/reset-password",auth, reset);
router.post("/reset-password2", reset2);

//Get user info
router.get("/user-info/:id",info);

//Update user info
router.patch("/update-info",update);

//logout
router.get("/logout",logout);



export default router;
