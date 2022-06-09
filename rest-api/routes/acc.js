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

//creat a accomodation offer
router.post("/create", verifyUser, createAcc);

//update a accomodation offer
router.put("/update/:offerId",verifyUser,  updateAcc);

//delete aaccomodation offer
router.delete("/delete/:offerId",verifyUser,  deleteAcc);

//reserve or cancel a accomodation offer 
router.put("/reserve/offerId",verifyUser,  reserveAcc);

//get a accommodation offer
router.get("/get/:offerId", getAcc);

//get all accomodation offers
router.get("/getAll", getallAcc);

export default router;
