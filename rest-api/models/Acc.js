import mongoose from "mongoose";

const AccSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      default: "",
    },

    username: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "https://res.cloudinary.com/duck2vdcy/image/upload/v1655842388/avatar/Placeholder_xqwinv.jpg",
    },
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    price: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    bookingdate: {
      type: String,
      required: true,
    },

    leavingdate: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    maxperson: {
      type: Number,
      required: true,
    },

    reserveSeats: {
      type: Number,
      required: true,
      default: 0,
    },

    unReserveSeats: {
      type: Number,
      required: true,
      default: 0,
    },

    bookers: {
      type: Array,
      default: [],
    },

    rating: {
      type: Number,
      min: 0,
      max: 5,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },
    
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Acc", AccSchema);
