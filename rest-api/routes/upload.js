import express from "express";
import upload from "../middlewares/upload.js";
import uploadImage from "../middlewares/uploadImage.js";
import {auth} from "../middlewares/auth.js";
import { uploadController } from "../controllers/ctrlUpload.js";

const router = express.Router();

router.post(
  "/",
  uploadImage,
  upload,
  uploadController.uploadAvatar
);

export default router;
