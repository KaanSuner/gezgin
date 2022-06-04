import express from "express"

const router = express.Router();

import {updateUser, deleteUser,getUser} from "../controllers/ctrlUser.js";

//update user
router.put("/:id", updateUser);
//delete user

router.delete("/:id", deleteUser);

//get a user
router.get("/:id", getUser);

export default router;
