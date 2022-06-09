import express from "express";
import { verifyUser } from "../utils/verifyToken.js";

import {
  createAcc,
  updateAcc,
  deleteAcc,
  reserveAcc,
  getAcc,
  getallAcc,
} from "../controllers/ctrlAcc.js";

const router = express.Router();

//creat a house post
router.post("/", verifyUser, createAcc);

//update a house post
router.put("/:id",verifyUser,  updateAcc);

//delete a house post
router.delete("/:id",verifyUser,  deleteAcc);

//reserve a house post
router.put("/:id/houseReservation",verifyUser,  reserveAcc);

//get a house post
router.get("/:id", getAcc);

//get all house posts
router.get("/posts/:id", getallAcc);

export default router;
