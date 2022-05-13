const router = require("express").Router();
const HousePost = require("../models/HousePost");
const User = require("../models/User");

//creat a house post
router.post("/", async (req, res) => {
  const newHousePost = new HousePost(req.body);
  try {
    const savedHousePost = await newHousePost.save();
    res.status(200).json(savedHousePost);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update a house post

router.put("/:id", async (req, res) => {
  try {
    const housepost = await HousePost.findById(req.params.id);
    if (housepost.userId === req.body.userId) {
      await housepost.updateOne({ $set: req.body });
      res.status(200).json("The accomodation post has been updated");
    } else {
      res.status(403).json("you can update only your accomodation post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete a house post
router.delete("/:id", async (req, res) => {
  try {
    const housepost = await HousePost.findById(req.params.id);
    if (housepost.userId === req.body.userId) {
      await housepost.deleteOne();
      res.status(200).json("The accomodation post has been deleted ");
    } else {
      res.status(403).json("you can delete only your accomodition post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//reserve a house post
router.put("/:id/houseReservation", async (req, res) => {
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
    res.status(500).json(err);
  }
});

//get a house post
router.get("/:id", async (req, res) => {
  try {
    const housepost = await HousePost.findById(req.params.id);
    res.status(200).json(housepost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all house posts
router.get("/posts/all", async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userHousePosts = await HousePost.find({ userId: {$ne:currentUser._id }});
    res.status(200).json(userHousePosts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
