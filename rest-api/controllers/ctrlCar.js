import CarPost from "../models/CarPost.js";

export const createCar = async (req, res, next) => {
  const newCarPost = new CarPost(req.body);
  try {
    const savedCarPost = await newCarPost.save();
    res.status(200).json(savedCarPost);
  } catch (err) {
    next(err);
  }
};

export const updateCar = async (req, res, next) => {
  try {
    const carpost = await CarPost.findById(req.params.id);
    if (carpost.userId === req.body.userId) {
      await carpost.updateOne({ $set: req.body });
      res.status(200).json("The car post has been updated");
    } else {
      res.status(403).json("you can update only your car post");
    }
  } catch (err) {
    next(err);
  }
};

export const deleteCar = async (req, res, next) => {
  try {
    const carpost = await CarPost.findById(req.params.id);
    if (carpost.userId === req.body.userId) {
      await carpost.deleteOne();
      res.status(200).json("The car post has been deleted ");
    } else {
      res.status(403).json("you can delete only your car post");
    }
  } catch (err) {
    next(err);
  }
};

export const reserveCar = async (req, res, next) => {
  try {
    const carpost = await CarPost.findById(req.params.id);
    if (carpost.userId !== req.body.userId) {
      if (!carpost.persons.includes(req.body.userId)) {
        await carpost.updateOne({ $push: { persons: req.body.userId } });
        res.status(200).json("The car seat has been reserved.");
      } else {
        await carpost.updateOne({ $pull: { persons: req.body.userId } });
        res.status(403).json("Seat reservation has been removed");
      }
    } else {
      res
        .status(403)
        .json("you can not make a seat reservation for your own car");
    }
  } catch (err) {
    next(err);
  }
};

export const getCar = async (req, res, next) => {
  try {
    const carpost = await CarPost.findById(req.params.id);
    res.status(200).json(carpost);
  } catch (err) {
    next(err);
  }
};

export const getallCar = async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userCarPosts = await CarPost.find({
      userId: { $ne: currentUser._id },
    });
    res.status(200).json(userCarPosts);
  } catch (err) {
    next(err);
  }
};
