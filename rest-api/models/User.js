import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      min: 3,
      max: 20,
      trim:true
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      min: 3,
      max: 20,
    },

    surname: {
      type: String,
      required:[ true, "Surname is required"],
      min: 1,
      max: 20,
    },

    email: {
      type: String,
      required: [true,"Email is required"],
      max: 70,
      unique: true,
      trim:true
    },

    password: {
      type: String,
      required:  [true,"Password is required"],
      min: 6,
    },

    phone: {
      type: String,
      required: [true,"Phone is required"],
      min: 10,
      max: 10,
      unique: true,
    },

    gender: {
      type: String,
      required: [true, "Gender is required"]
    },

    avatar: {
      type: String,
      required: [true,"Avatar is required"],
      default: "",
    },

    myTravelOffers: [
      {
        offerId: String,
        offerType: String,
        username: String,
        price: String,
        maxperson: Number,
        departureDate: String,
        departureCity: String,
        departureTime: String,
        arrivalCity: String,
        arrivalTime: String,
        isActive: Boolean,
      },
    ],

    myAccOffers: [
      {
        offerId: String,
        username: String,
        offerType: String,
        price: String,
        maxperson:Number,
        personNumber: Number,
        bookingdate: String,
        leavingdate: String,
        city: String,
        isActive: Boolean,
      },
    ],
    myTravelReservations: [
      {
        offerId: String,
        reservationType: String,
        username: String,
        price: String,
        personNumber: Number,
        departureDate: String,
        departureCity: String,
        departureTime: String,
        arrivalCity: String,
        arrivalTime: String,
        isActive: Boolean,
      },
    ],

    myAccReservations: [
      {
        offerId: String,
        username: String,
        reservationType: String,
        price: String,
        personNumber: Number,
        bookingdate: String,
        leavingdate: String,
        city: String,
        isActive: Boolean,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
