import express from "express"
const router = express.Router();
import{
  createHouse,
  updateHouse,
  deleteHouse,
  reserveHouse,
  getHouse,
  getallHouse,
} from "../controllers/ctrlHouse.js";

//creat a house post
router.post("/", createHouse);
//update a house post

router.put("/:id", updateHouse);

//delete a house post
router.delete("/:id", deleteHouse);

//reserve a house post
router.put("/:id/houseReservation", reserveHouse);

//get a house post
router.get("/:id", getHouse);

//get all house posts
router.get("/posts/all", getallHouse);

export default router;
