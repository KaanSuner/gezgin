import Acc from "../models/Acc.js";
import User from "../models/User.js";

export const createAcc = async (req, res, next) => {
  const newAcc = new Acc({
    userId: req.body.userId,
    username: req.body.username,
    price: req.body.price,
    name: req.body.name,
    surname: req.body.surname,
    phone: req.body.phone,
    description: req.body.description,
    bookingdate: req.body.bookingdate,
    leavingdate: req.body.leavingdate,
    city: req.body.city,
    maxperson: req.body.maxperson,
    unReserveSeats: req.body.maxperson,
    avatar: req.body.avatar,
  });
  try {
    const savedAcc = await newAcc.save();
    res.status(200).json(savedAcc);
  } catch (err) {
    next(err);
  }
};

export const addMyAccOffer = async (req, res, next) => {
  const acc = await Acc.findOne(req.body);
  const user = await User.findById(req.body.userId);
  try {
    await user.updateOne({
      $push: {
        myAccOffers: {
          offerId: acc._id,
          username: req.body.username,
          reservationType: "accomodation",
          price: req.body.price,
          maxperson: req.body.maxperson,
          reserveSeats: 0,
          bookingdate: req.body.bookingdate,
          leavingdate: req.body.leavingdate,
          city: req.body.city,
          isActive: true,
          avatar: req.body.avatar,
        },
      },
    });
    res.status(200).json("My accomodation offers has been updated.");
  } catch (err) {
    next(err);
  }
};

export const deleteAcc = async (req, res, next) => {
  try {
    const acc = await Acc.findById(req.params.offerId);
    await acc.deleteOne();
    res.status(200).json("The accomodation offer has been deleted ");
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

export const reserveAcc = async (req, res, next) => {
  const acc = await Acc.findById(req.params.offerId);
  try {
    if (acc.reserveSeats == acc.maxperson - 1) {
      await acc.updateOne({ $set: { isAvailable: false } });
    }
    await acc.updateOne({
      $push: { bookers: req.params.userId },
      $inc: { reserveSeats: 1, unReserveSeats: -1 },
    });

    await User.updateOne(
      { _id: acc.userId, myAccOffers: { offerId: req.params.offerId } },
      {
        $inc: { "myAccOffers.$.reserveSeats": 1 },
      }
    );
    res.status(200).json("Accomodation has been reserved.");
  } catch (err) {
    next(err);
  }
};

export const checkAccRsv = async (req, res, next) => {
  const date = new Date().toLocaleDateString("tr-TR");
  try {
    await User.updateMany(
      { _id: req.params.userId },
      { $set: { "myAccReservations.$[t].isActive": false } },
      {
        arrayFilters: [{ "t.isActive": true, "t.leavingdate": { $lt: date } }],
      }
    );
  } catch (err) {
    console.log(err);
  }
  res.status(200).json("Accomodation reservations checked");
};

export const checkAccOffer = async (req, res, next) => {
  const date = new Date().toLocaleDateString("tr-TR");
  try {
    await User.updateMany(
      { _id: req.params.userId },
      { $set: { "myAccOffers.$[t].isActive": false } },
      {
        arrayFilters: [{ "t.isActive": true, "t.leavingdate": { $lt: date } }],
      }
    );
  } catch (err) {
    console.log(err);
  }
  res.status(200).json("My accomodation offers checked");
};

export const addMyAccReservation = async (req, res, next) => {
  const acc = await Acc.findById(req.params.offerId);
  const user = await User.findById(req.params.userId);
  const personNumber = Number(req.params.personNumber);
  try {
    await user.updateOne({
      $push: {
        myAccReservations: {
          offerId: acc._id,
          username: acc.username,
          reservationType: "accomodation",
          price: acc.price,
          personNumber: personNumber,
          bookingdate: acc.bookingdate,
          leavingdate: acc.leavingdate,
          city: acc.city,
          isActive: true,
          avatar: acc.avatar,
        },
      },
    });
    res.status(200).json("My accomodation reservations has been updated.");
  } catch (err) {
    next(err);
  }
};

export const cancelAccRsv = async (req, res, next) => {
  const personNumber = req.params.personNumber;
  const acc = await Acc.findById(req.params.offerId);
  try {
    await Acc.updateMany(
      { _id: req.params.offerId },
      { $pull: { bookers: req.params.userId } }
    );
    await Acc.updateOne(
      { _id: req.params.offerId },
      { $set: { isAvailable: true } }
    );
    await Acc.updateOne(
      { _id: req.params.offerId },
      { $inc: { reserveSeats: -personNumber } }
    );
    await Acc.updateOne(
      { _id: req.params.offerId },
      { $inc: { unReserveSeats: personNumber } }
    );
    await User.updateOne(
      { _id: req.params.userId },
      {
        $pull: { myAccReservations: { _id: req.params.reservationId } },
      }
    );
    await User.updateOne(
      { _id: acc.userId, myAccOffers: { offerId: req.params.offerId } },
      {
        $inc: { "myAccOffers.$.reserveSeats": -1 },
      }
    );
    res.status(200).json("Accomodation has been cancelled.");
  } catch (err) {
    console.log(err);
  }
};

export const cancelMyAccOffer = async (req, res, next) => {
  const acc = await Acc.findById(req.params.myOfferId);

  try {
    for (let i = 0; i < acc.bookers.length; i++) {
      var userId = acc.bookers[i];

      await User.updateOne(
        { _id: userId },
        {
          $pull: { myAccReservations: { offerId: req.params.myOfferId } },
        }
      );
    }

    await User.updateOne(
      { _id: req.params.userId },
      {
        $pull: { myAccOffers: { offerId: req.params.myOfferId } },
      }
    );

    res.status(200).json("Bookers reservations are deleted.");
  } catch (err) {
    console.log(err);
  }
};

export const deleteAccRsv = async (req, res, next) => {
  try {
    await User.updateOne(
      { _id: req.params.userId },
      {
        $pull: { myAccReservations: { _id: req.params.reservationId } },
      }
    );
    res.status(200).json("Accomodation has been deleted.");
  } catch (err) {
    console.log(err);
  }
};

export const deleteMyAccOffer = async (req, res, next) => {
  try {
    await User.updateOne(
      { _id: req.params.userId },
      {
        $pull: { myAccOffers: { _id: req.params.myOfferId } },
      }
    );
    res.status(200).json("My accomodation offer has been deleted.");
  } catch (err) {
    console.log(err);
  }
};

export const getMyAccRsv = async (req, res, next) => {
  const userId = req.query.userId;
  const user = await User.findById(userId);
  try {
    const reservations = user.myAccReservations;
    res.status(200).json(reservations);
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

export const getAccSearch = async (req, res, next) => {
  const userId = req.query.userId;
  const city = req.query.City;
  const bookingDate = req.query.bookingDate;
  const leavingDate = req.query.leavingDate;
  const personNumber = req.query.personNumber;

  try {
    const acc = await Acc.find({
      $and: [
        { userId: { $ne: userId } },
        { city: city },
        { bookingdate: { $lte: bookingDate } },
        { leavingdate: { $gte: leavingDate } },
        { unReserveSeats: { $gte: personNumber } },
      ],
    });
    res.status(200).json(acc);
  } catch (err) {
    next(err);
  }
};

export const getallAccOffers = async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.query.userId);
    const userAcc = currentUser.myAccOffers;
    res.status(200).json(userAcc);
  } catch (err) {
    next(err);
  }
};

export const deleteOldAccs = async (req, res, next) => {
  const date = new Date().toLocaleDateString("tr-TR");
  await Acc.deleteMany({
    userId: req.params.userId,
    leavingdate: { $lt: date },
  });
  res.status(200).json("Old accomodation offers are removed");
};
