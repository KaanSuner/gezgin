import express from "express";
import {verifyUser } from "../utils/verifyToken.js";

import {
  createCar,
  updateCar,
  deleteCar,
  reserveCar,
  getCar,
  getallCar,
} from "../controllers/ctrlCar.js";

const router = express.Router();

//create a car post
router.post("/", verifyUser, createCar);

//update a car post
router.put("/:id", verifyUser, updateCar);

//delete a car post
router.delete("/:id", verifyUser, deleteCar);

//reserve a car post
router.put("/:id/carReservation",verifyUser, reserveCar);

//get a car post
router.get("/:id", getCar);

//get all car posts
router.get("/posts/:id", getallCar);


export default router;
