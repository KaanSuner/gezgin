import mongoose from "mongoose";

const HousePostSchema = new mongoose.Schema(
  {
    userId: {
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
      type: String,
      required: true,
    },

    persons: {
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

export default mongoose.model("HousePost", HousePostSchema);
