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
      type: Date,
      required: true,
    },

    leavingdate: {
      type: Date,
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
  },
  { timestamps: true }
);

export default mongoose.model("Acc", AccSchema);
