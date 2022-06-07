import express from "express";
import { verifyUser } from "../utils/verifyToken.js";

import {
  createHouse,
  updateHouse,
  deleteHouse,
  reserveHouse,
  getHouse,
  getallHouse,
} from "../controllers/ctrlHouse.js";

const router = express.Router();

//creat a house post
router.post("/", verifyUser, createHouse);

//update a house post
router.put("/:id",verifyUser,  updateHouse);

//delete a house post
router.delete("/:id",verifyUser,  deleteHouse);

//reserve a house post
router.put("/:id/houseReservation",verifyUser,  reserveHouse);

//get a house post
router.get("/:id", getHouse);

//get all house posts
router.get("/posts/:id", getallHouse);

export default router;
