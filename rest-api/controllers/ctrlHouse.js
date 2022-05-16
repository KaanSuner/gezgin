import HousePost from "../models/HousePost.js";

export const createHouse = async (req, res, next) => {
  const newHousePost = new HousePost(req.body);
  try {
    const savedHousePost = await newHousePost.save();
    res.status(200).json(savedHousePost);
  } catch (err) {
    next(err);
  }
};

export const updateHouse = async (req, res, next) => {
  try {
    const housepost = await HousePost.findById(req.params.id);
    if (housepost.userId === req.body.userId) {
      await housepost.updateOne({ $set: req.body });
      res.status(200).json("The accomodation post has been updated");
    } else {
      res.status(403).json("you can update only your accomodation post");
    }
  } catch (err) {
    next(err);
  }
};

export const deleteHouse = async (req, res, next) => {
  try {
    const housepost = await HousePost.findById(req.params.id);
    if (housepost.userId === req.body.userId) {
      await housepost.deleteOne();
      res.status(200).json("The accomodation post has been deleted ");
    } else {
      res.status(403).json("you can delete only your accomodition post");
    }
  } catch (err) {
    next(err);
  }
};

export const getHouse = async (req, res, next) => {
  try {
    const housepost = await HousePost.findById(req.params.id);
    res.status(200).json(housepost);
  } catch (err) {
    next(err);
  }
};

export const reserveHouse = async (req, res, next) => {
  try {
    const housepost = await HousePost.findById(req.params.id);
    if (housepost.userId !== req.body.userId) {
      if (!housepost.persons.includes(req.body.userId)) {
        await housepost.updateOne({ $push: { persons: req.body.userId } });
        res.status(200).json("The house has been reserved.");
      } else {
        await housepost.updateOne({ $pull: { persons: req.body.userId } });
        res.status(403).json("House reservation has been removed");
      }
    } else {
      res.status(403).json("you can not make a reservation for your house");
    }
  } catch (err) {
    next(err);
  }
};

export const getallHouse = async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userHousePosts = await HousePost.find({
      userId: { $ne: currentUser._id },
    });
    res.status(200).json(userHousePosts);
  } catch (err) {
    next(err);
  }
};
