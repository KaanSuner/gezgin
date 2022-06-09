import Travel from "../models/Travel.js";

export const createTravel = async (req, res, next) => {
  const newTravel = new Travel(req.body);
  try {
    const savedTravel = await newTravel.save();
    res.status(200).json(savedTravel);
  } catch (err) {
    next(err);
  }
};

export const updateTravel = async (req, res, next) => {
  try {
    const travel = await Travel.findById(req.params.id);
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
    const travel = await Travel.findById(req.params.id);
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
    const travel = await Travel.findById(req.params.id);
    if (travel.userId !== req.body.userId) {
      if (!travel.persons.includes(req.body.userId)) {
        await travel.updateOne({ $push: { persons: req.body.userId } });
        res.status(200).json("Travel has been reserved.");
      } else {
        await travel.updateOne({ $pull: { persons: req.body.userId } });
        res.status(403).json("Travel reservation has been removed");
      }
    } else {
      res
        .status(403)
        .json("you can not make a travel reservation for your own vehicle");
    }
  } catch (err) {
    next(err);
  }
};

export const getTravel = async (req, res, next) => {
  try {
    const travel = await Travel.findById(req.params.id);
    res.status(200).json(travel);
  } catch (err) {
    next(err);
  }
};

export const getallTravel = async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userTravels = await Travel.find({
      userId: { $ne: currentUser._id },
    });
    res.status(200).json(userTravels);
  } catch (err) {
    next(err);
  }
};
