const router = require("express").Router();
const CarPost = require("../models/CarPost");
const User = require("../models/User");

//creat a car post
router.post("/", async (req, res) => {
  const newCarPost = new CarPost(req.body);
  try {
    const savedCarPost = await newCarPost.save();
    res.status(200).json(savedCarPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update a car post

router.put("/:id", async (req, res) => {
  try {
    const carpost = await CarPost.findById(req.params.id);
    if (carpost.userId === req.body.userId) {
      await carpost.updateOne({ $set: req.body });
      res.status(200).json("The car post has been updated");
    } else {
      res.status(403).json("you can update only your car post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//delete a car post
router.delete("/:id", async (req, res) => {
  try {
    const carpost = await CarPost.findById(req.params.id);
    if (carpost.userId === req.body.userId) {
      await carpost.deleteOne();
      res.status(200).json("The car post has been deleted ");
    } else {
      res.status(403).json("you can delete only your car post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//reserve a car post

router.put("/:id/carReservation", async (req, res) => {
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
    res.status(500).json(err);
  }
});

//get a car post
router.get("/:id", async (req, res) => {
  try {
    const carpost = await CarPost.findById(req.params.id);
    res.status(200).json(carpost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all car posts
router.get("/:id", async (req, res) => {
  try {
    const carpost = await CarPost.findById(req.params.id);
    res.status(200).json(carpost);
  } catch (err) {
    res.status(500).json(err);
  }
});
//get all car posts
router.get("/posts/all", async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userCarPosts = await CarPost.find({ userId: {$ne:currentUser._id}});
    res.status(200).json(userCarPosts);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
