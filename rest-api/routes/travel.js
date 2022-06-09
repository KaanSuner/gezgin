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

//create a travel offer
router.post("/:id/create", verifyUser, createTravel);

//update a travel offer
router.put("/:id/update", verifyUser, updateTravel);

//delete a travel offer
router.delete("/:id/delete", verifyUser, deleteTravel);

//reserve or cancel a travel offer
router.put("/:id/reserve",verifyUser, reserveTravel);

//get a travel offer
router.get("/:id/get", getTravel);

//get all travel offers
router.get("/:id/getAll", getallTravel);


export default router;
