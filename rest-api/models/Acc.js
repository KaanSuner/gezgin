import mongoose from "mongoose";

const AccSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      default:""
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
      type: String,
      required: true,
    },

    bookers: {
      type: Array,
      required: true,
      default: [],
    },

    rating: {
      type: Number,
      min:0,
      max:5
    }, 

    lat:{
      type:Number
    },

    long:{
      type:Number
    },

    isAvailable: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Acc", AccSchema);
