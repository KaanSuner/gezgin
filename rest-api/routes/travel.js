import express from "express";
import {verifyUser } from "../utils/verifyToken.js";
import {
  createTravel,
  updateTravel,
  deleteTravel,
  reserveTravel,
  getTravel,
  getTravelSearch,
  addMyTravelReservation,
  getMyTravelRsv,
  cancelTravelRsv,
  deleteTravelRsv,
  checkTravelRsv,
  addMyTravelOffer,
  deleteMyTravelOffer,
  cancelMyTravelOffer,
  checkTravelOffer,
  getallTravelOffers,
  deleteOldTravels
} from "../controllers/ctrlTravel.js";

const router = express.Router();

//create a travel offer
router.post("/create", verifyUser, createTravel);

//creat a my travel offer 
router.put("/createMyTravelOffer", verifyUser, addMyTravelOffer);

//update a travel offer
router.put("/update/:offerId", verifyUser, updateTravel);

//delete a travel offer
router.delete("/delete/:offerId", verifyUser, deleteTravel);

//reserve a travel offer
router.put("/reserve/:offerId/:userId",verifyUser, reserveTravel);

//add reserved travel reservation to my travel reservations 
router.put("/updateMyTravelreservation/:userId/:offerId/:personNumber", verifyUser, addMyTravelReservation);

//get all travel reservations of user
router.get("/get/travelReservations", getMyTravelRsv);

//cancel an travel reservation
router.put("/cancelTravelReservations/:userId/:reservationId/:offerId/:personNumber", cancelTravelRsv);

//canncel an travel reservation
router.put("/deleteTravelReservations/:userId/:reservationId",deleteTravelRsv);

//canncel an accommodation reservation
router.put("/deleteMyTravelOffer/:userId/:myOfferId", deleteMyTravelOffer);

//cancel an my travel offer
router.put("/cancelMyTravelOffer/:userId/:myOfferId", cancelMyTravelOffer);

//check date for active travel reservations
router.put("/checkTravelReservations/:userId",  checkTravelRsv);

//check date for active my travel offers
router.put("/checkMyTravelOffers/:userId", checkTravelOffer);

//get a travel offer
router.get("/get/:offerId", getTravel);

//get travel offer search results
router.get("/", getTravelSearch);

//get all user travels
router.get("/getAllTravelOffers", getallTravelOffers);

//delete all old user travel offers
router.delete("/deleteOldOnes/:userId", deleteOldTravels);


export default router;
