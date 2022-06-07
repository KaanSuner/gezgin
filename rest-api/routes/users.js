import express from "express"
import {updateUser, deleteUser,getUser} from "../controllers/ctrlUser.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router();


//update user
router.put("/:id",verifyUser, updateUser);

//delete user
router.delete("/:id",verifyUser, deleteUser);

//get a user
router.get("/:id", getUser);

export default router;
