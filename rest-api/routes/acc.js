import express from "express";
import { verifyUser } from "../utils/verifyToken.js";

import {
  createAcc,
  updateAcc,
  deleteAcc,
  reserveAcc,
  getAcc,
  getAccSearch,
  addMyAccReservation,
  getMyAccRsv,
  cancelAccRsv,
  deleteAccRsv,
  checkAccRsv,
  addMyAccOffer,
  getallAccOffers,
  checkAccOffer,
  deleteMyAccOffer,
  cancelMyAccOffer,
  deleteOldAccs,
} from "../controllers/ctrlAcc.js";

const router = express.Router();

//creat a accomodation offer
router.post("/create", verifyUser, createAcc);

//creat a my accomodation offer 
router.put("/createMyAccOffer", verifyUser, addMyAccOffer);

//update a accomodation offer
router.put("/update/:offerId",verifyUser,  updateAcc);

//delete aaccomodation offer
router.delete("/delete/:offerId",verifyUser,  deleteAcc);

//reserve a accomodation offer 
router.put("/reserve/:offerId/:userId",verifyUser,  reserveAcc);

//add reserved accomodation reservation to my accomodation reservations 
router.put("/updateMyAccreservation/:userId/:offerId/:personNumber", verifyUser, addMyAccReservation);

//get all accommodation reservations of user
router.get("/get/accReservations", getMyAccRsv);

//cancel an accommodation reservation
router.put("/cancelAccReservations/:userId/:reservationId/:offerId/:personNumber", cancelAccRsv);

//cancel an accommodation reservation
router.put("/deleteAccReservations/:userId/:reservationId", deleteAccRsv);

//remove an my accommodation offer
router.put("/deleteMyAccOffer/:userId/:myOfferId", deleteMyAccOffer);

//cancel an my accommodation offer
router.put("/cancelMyAccOffer/:userId/:myOfferId", cancelMyAccOffer);

//check date for active accommodation reservations
router.put("/checkAccReservations/:userId", checkAccRsv);

//check date for active my accommodation offers
router.put("/checkMyAccOffers/:userId", checkAccOffer);

//get a accommodation offer
router.get("/get/:offerId", getAcc);

//get all accomodation offers
router.get("/", getAccSearch);

//get all accomodation offers
router.get("/getAllAccOffers", getallAccOffers );

//delete all old user accomodation offers
router.delete("/deleteOldOnes/:userId", deleteOldAccs );



export default router;
