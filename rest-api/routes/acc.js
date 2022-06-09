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
router.post("/:id/create", verifyUser, createAcc);

//update a accomodation offer
router.put("/:id/update",verifyUser,  updateAcc);

//delete aaccomodation offer
router.delete("/:id/delete",verifyUser,  deleteAcc);

//reserve or cancel a accomodation offer 
router.put("/:id/reserve",verifyUser,  reserveAcc);

//get a accommodation offer
router.get("/:id/get", getAcc);

//get all accomodation offers
router.get("/:id/getAll", getallAcc);

export default router;
