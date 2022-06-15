import Travel from "../models/Travel.js";
import User from "../models/User.js"

export const createTravel = async (req, res, next) => {
  const newTravel = new Travel({
      userId: req.body.userId,
      username: req.body.username,
      departureCity: req.body.departureCity,
      arrivalCity: req.body.arrivalCity,
      price: req.body.price,
      departureTime: req.body.departureTime,
      arrivalTime: req.body.arrivalTime,
      description: req.body.description,
      departureDate:req.body.departureDate,
      maxperson:req.body.maxperson,   
  });
  try {
    const savedTravel = await newTravel.save();
    res.status(200).json(savedTravel);
  } catch (err) {
    next(err);
  }
};

export const updateTravel = async (req, res, next) => {
  try {
    const travel = await Travel.findById(req.params.offerId);
    if (travel.userId === req.body.userId) {
      await travel.updateOne({ $set: req.body });
      res.status(200).json("The travel offer has been updated");
    } else {
      res.status(403).json("you can update only your travel offer");
    }
  } catch (err) {
    next(err);
  }
};

export const deleteTravel = async (req, res, next) => {
  try {
    const travel = await Travel.findById(req.params.offerId);
    if (travel.userId === req.body.userId) {
      await travel.deleteOne();
      res.status(200).json("The car post has been deleted ");
    } else {
      res.status(403).json("you can delete only your car post");
    }
  } catch (err) {
    next(err);
  }
};

export const reserveTravel = async (req, res, next) => {
  try {
    const travel = await Travel.findById(req.params.offerId);
    if (travel.userId !== req.body.userId) {
      if (!travel.bookers.includes(req.body.userId)) {
        await travel.updateOne({ $push: { bookers: req.body.userId } });
        res.status(200).json("Travel has been reserved.");
      } else {
        await travel.updateOne({ $pull: { bookers: req.body.userId } });
        res.status(403).json("Travel reservation has been cancelled.");
      }
    } else {
      res.status(403).json("You cannot book your own travel offer.");
    }
  } catch (err) {
    next(err);
  }
};

export const getTravel = async (req, res, next) => {
  try {
    const travel = await Travel.findById(req.params.offerId);
    res.status(200).json(travel);
  } catch (err) {
    next(err);
  }
};

export const getTravelSearch = async (req, res, next) => {
  const departure=req.query.departureCity
  const destination=req.query.arrivalCity
  const departureDate=req.query.departureDate
  const personNumber=req.query.personNumber

  try {
    const travel = await Travel.find({City:departure,arrivalCity:destination,departureDate:departureDate});
    res.status(200).json(travel);
  } catch (err) {
    next(err);
  }
};

export const getallUserTravels = async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userTravels = await Travel.find({
      userId: { $ne: currentUser._id }
    });
    res.status(200).json(userTravels);
  } catch (err) {
    next(err);
  }
};
