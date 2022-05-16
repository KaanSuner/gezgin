import express from "express";
const router = express.Router();
import {
  createCar,
  updateCar,
  deleteCar,
  reserveCar,
  getCar,
  getallCar,
} from "../controllers/ctrlCar.js";

//creat a car post
router.post("/", createCar);
//update a car post

router.put("/:id", updateCar);
//delete a car post
router.delete("/:id", deleteCar);
//reserve a car post

router.put("/:id/carReservation", reserveCar);

//get a car post
router.get("/:id", getCar);

//get all car posts
router.get("/posts/all", getallCar);

export default router;
