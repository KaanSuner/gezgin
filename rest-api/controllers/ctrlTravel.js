import Travel from "../models/Travel.js";
import User from "../models/User.js";

export const createTravel = async (req, res, next) => {
  const newTravel = new Travel({
    userId: req.body.userId,
    username: req.body.username,
    name: req.body.name,
    surname: req.body.surname,
    phone: req.body.phone,
    departureCity: req.body.departureCity,
    arrivalCity: req.body.arrivalCity,
    price: req.body.price,
    departureTime: req.body.departureTime,
    arrivalTime: req.body.arrivalTime,
    description: req.body.description,
    departureDate: req.body.departureDate,
    maxperson: req.body.maxperson,
    unReserveSeats: req.body.maxperson,
  });

  try {
    const savedTravel = await newTravel.save();
    res.status(200).json(savedTravel);
  } catch (err) {
    next(err);
  }
};

export const addMyTravelOffer = async (req, res, next) => {
  const travel = await Travel.findOne(req.body);
  const user = await User.findById(req.body.userId);
  try {
    await user.updateOne({
      $push: {
        myTravelOffers: {
          offerId: travel._id,
          username: req.body.username,
          offerType: "travel",
          price: req.body.price,
          maxperson: req.body.maxperson,
          departureDate: req.body.departureDate,
          departureCity: req.body.departureCity,
          departureTime: req.body.departureTime,
          arrivalCity: req.body.arrivalCity,
          arrivalTime: req.body.arrivalTime,
          isActive: true,
        },
      },
    });
    res.status(200).json("My travel offers has been updated.");
  } catch (err) {
    next(err);
  }
};

export const deleteTravel = async (req, res, next) => {
  try {
    const travel = await Travel.findById(req.params.offerId);
    await travel.deleteOne();
    res.status(200).json("The car post has been deleted ");
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

export const reserveTravel = async (req, res, next) => {
  const travel = await Travel.findById(req.params.offerId);
  try {
    if (travel.reserveSeats == travel.maxperson - 1) {
      await travel.updateOne({ $set: { isAvailable: false } });
    }
    await travel.updateOne({
      $push: { bookers: req.params.userId },
      $inc: { reserveSeats: 1, unReserveSeats: -1 },
    });

    res.status(200).json("Travel has been reserved.");
  } catch (err) {
    next(err);
  }
};

export const checkTravelRsv = async (req, res, next) => {
  const date = new Date().toLocaleDateString("tr-TR");
  try {
    await User.updateMany(
      { _id: req.params.userId },
      { $set: { "myTravelReservations.$[t].isActive": false } },
      {
        arrayFilters: [
          { "t.isActive": true, "t.departureDate": { $lt: date } },
        ],
      }
    );
  } catch (err) {
    console.log(err);
  }
  res.status(200).json("Travel reservations checked");
};

export const checkTravelOffer = async (req, res, next) => {
  const date = new Date().toLocaleDateString("tr-TR");
  try {
    await User.updateMany(
      { _id: req.params.userId },
      { $set: { "myTravelOffers.$[t].isActive": false } },
      {
        arrayFilters: [
          { "t.isActive": true, "t.departureDate": { $lt: date } },
        ],
      }
    );
  } catch (err) {
    console.log(err);
  }
  res.status(200).json("My travel offers checked");
};

export const addMyTravelReservation = async (req, res, next) => {
  const travel = await Travel.findById(req.params.offerId);
  const user = await User.findById(req.params.userId);
  const personNumber = Number(req.params.personNumber);
  try {
    await user.updateOne({
      $push: {
        myTravelReservations: {
          offerId: travel._id,
          reservationType: "travel",
          username: travel.username,
          price: travel.price,
          personNumber: personNumber,
          departureDate: travel.departureDate,
          departureCity: travel.departureCity,
          departureTime: travel.departureTime,
          arrivalCity: travel.arrivalCity,
          arrivalTime: travel.arrivalTime,
          isActive: true,
        },
      },
    });
    res.status(200).json("My travel reservations has been updated.");
  } catch (err) {
    next(err);
  }
};

export const cancelTravelRsv = async (req, res, next) => {
  const personNumber = req.params.personNumber;
  try {
    await Travel.updateMany(
      { _id: req.params.offerId },
      { $pull: { bookers: req.params.userId } }
    );
    await Travel.updateOne(
      { _id: req.params.offerId },
      { $set: { isAvailable: true } }
    );
    await Travel.updateOne(
      { _id: req.params.offerId },
      { $inc: { reserveSeats: -personNumber } }
    );
    await Travel.updateOne(
      { _id: req.params.offerId },
      { $inc: { unReserveSeats: personNumber } }
    );
    await User.updateOne(
      { _id: req.params.userId },
      {
        $pull: { myTravelReservations: { _id: req.params.reservationId } },
      }
    );
    res.status(200).json("Travel has been cancelled.");
  } catch (err) {
    console.log(err);
  }
};

export const cancelMyTravelOffer = async (req, res, next) => {
  const travel = await Travel.findById(req.params.myOfferId);

  try {
    for (let i = 0; i < travel.bookers.length; i++) {
      var userId = travel.bookers[i];

      await User.updateOne(
        { _id: userId },
        {
          $pull: { myTravelReservations: { offerId: req.params.myOfferId } },
        }
      );
    }

    await User.updateOne(
      { _id: req.params.userId },
      {
        $pull: { myTravelOffers: { offerId: req.params.myOfferId } },
      }
    );

    res.status(200).json("Bookers reservations are deleted.");
  } catch (err) {
    console.log(err);
  }
};

export const deleteTravelRsv = async (req, res, next) => {
  try {
    await User.updateOne(
      { _id: req.params.userId },
      {
        $pull: { myTravelReservations: { _id: req.params.reservationId } },
      }
    );
    res.status(200).json("Travel has been deleted.");
  } catch (err) {
    console.log(err);
  }
};

export const deleteMyTravelOffer = async (req, res, next) => {
  try {
    await User.updateOne(
      { _id: req.params.userId },
      {
        $pull: { myTravelOffers: { _id: req.params.myOfferId } },
      }
    );
    res.status(200).json("My travel offer has been deleted.");
  } catch (err) {
    console.log(err);
  }
};

export const getMyTravelRsv = async (req, res, next) => {
  const userId = req.query.userId;
  const user = await User.findById(userId);
  try {
    const reservations = user.myTravelReservations;
    res.status(200).json(reservations);
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
  const userId = req.query.userId;
  const departure = req.query.departureCity;
  const destination = req.query.arrivalCity;
  const departureDate = req.query.departureDate;
  const personNumber = req.query.personNumber;

  try {
    const travel = await Travel.find({
      $and: [
        { userId: { $ne: userId } },
        {
          departureCity: departure,
          arrivalCity: destination,
          departureDate: { $eq: departureDate },
          unReserveSeats: { $gte: personNumber },
        },
      ],
    });
    res.status(200).json(travel);
  } catch (err) {
    next(err);
  }
};

export const getallTravelOffers = async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.query.userId);
    const userTravels = currentUser.myTravelOffers;
    res.status(200).json(userTravels);
  } catch (err) {
    next(err);
  }
};

export const deleteOldTravels = async (req, res, next) => {
  const date = new Date().toLocaleDateString("tr-TR");
  await Travel.deleteMany({
    userId: req.params.userId,
    departureDate: { $lt: date },
  });
  res.status(200).json("Old travel offers are removed");
};
