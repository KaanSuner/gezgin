import Acc from "../models/Acc.js";
import User from "../models/User.js"


export const createAcc = async (req, res, next) => {
  const newAcc = new Acc(req.body);
  try {
    const savedAcc = await newAcc.save();
    res.status(200).json(savedAcc);
  } catch (err) {
    next(err);
  }
};

export const updateAcc = async (req, res, next) => {
  try {
    const acc = await Acc.findById(req.params.offerId);
    if (acc.userId === req.body.userId) {
      await acc.updateOne({ $set: req.body });
      res.status(200).json("The accomodation offer has been updated");
    } else {
      res.status(403).json("you can update only your accomodation offer ");
    }
  } catch (err) {
    next(err);
  }
};

export const deleteAcc = async (req, res, next) => {
  try {
    const acc = await Acc.findById(req.params.offerId);
    if (acc.userId === req.body.userId) {
      await acc.deleteOne();
      res.status(200).json("The accomodation offer has been deleted ");
    } else {
      res.status(403).json("you can delete only your accomodation offer");
    }
  } catch (err) {
    next(err);
  }
};

export const getAcc = async (req, res, next) => {
  try {
    const acc = await Acc.findById(req.params.offerId);
    res.status(200).json(acc);
  } catch (err) {
    next(err);
  }
};

export const reserveAcc = async (req, res, next) => {
  try {
    const acc = await Acc.findById(req.params.offerId);
    if (acc.userId !== req.body.userId) {
      if (!acc.bookers.includes(req.body.userId)) {
        await acc.updateOne({ $push: { bookers: req.body.userId } });
        res.status(200).json("The accomodation has been reserved.");
      } else {
        await acc.updateOne({ $pull: { bookers: req.body.userId } });
        res.status(403).json("Accomodation reservation has been cancelled.");
      }
    } else {
      res.status(403).json("You cannot book your own accomodation offer. ");
    }
  } catch (err) {
    next(err);
  }
};

export const getallAcc = async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userAcc = await Acc.find({
      userId: { $ne: currentUser._id },
    });
    res.status(200).json(userAcc);
  } catch (err) {
    next(err);
  }
};