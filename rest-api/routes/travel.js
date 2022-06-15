import express from "express";
import {verifyUser } from "../utils/verifyToken.js";
import {
  createTravel,
  updateTravel,
  deleteTravel,
  reserveTravel,
  getTravel,
  getTravelSearch,
  getallUserTravels
} from "../controllers/ctrlTravel.js";

const router = express.Router();

//create a travel offer
router.post("/create", verifyUser, createTravel);

//update a travel offer
router.put("/update/:offerId", verifyUser, updateTravel);

//delete a travel offer
router.delete("/delete/:offerId", verifyUser, deleteTravel);

//reserve or cancel a travel offer
router.put("/reserve/:offerId",verifyUser, reserveTravel);

//get a travel offer
router.get("/get/:offerId", getTravel);

//get travel offer search results
router.get("/", getTravelSearch);

//get all user travels
router.get("/getAllUserTravels", getallUserTravels);


export default router;
