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

//Get user info
router.get("/user-info",auth, info);

//Update user info
router.get("/update-info",auth, update);

//logout
router.get("/logout",logout);



export default router;
