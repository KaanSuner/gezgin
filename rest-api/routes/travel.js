import express from "express";
import {verifyUser } from "../utils/verifyToken.js";

import {
  createTravel,
  updateTravel,
  deleteTravel,
  reserveTravel,
  getTravel,
  getallTravel,
} from "../controllers/ctrlTravel.js";

const router = express.Router();

//create a car post
router.post("/", verifyUser, createTravel);

//update a car post
router.put("/:id", verifyUser, updateTravel);

//delete a car post
router.delete("/:id", verifyUser, deleteTravel);

//reserve a car post
router.put("/:id/carReservation",verifyUser, reserveTravel);

//get a car post
router.get("/:id", getTravel);

//get all car posts
router.get("/posts/:id", getallTravel);


export default router;
