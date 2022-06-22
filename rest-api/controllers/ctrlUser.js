import User from "../models/User.js";
import bcrypt from "bcrypt";
import {auth} from "../middlewares/auth.js";


export const updateUser = async (req, res, next) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        next(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      next(err);
    }
  } else {
    return res.status(403).json("You can update only your account !");
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted");
    } catch (err) {
      next(err);
    }
  } else {
    return res.status(403).json("You can delete only your account !");
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, isAdmin, createdAt, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    next(err)
  }
};
