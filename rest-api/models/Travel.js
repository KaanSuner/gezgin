import mongoose from "mongoose";

const TravelSchema = new mongoose.Schema(
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

    departureDate: {
      type: Date,
      required: true,
    },

    departureCity: {
      type: String,
      required: true,
    },

    departureTime: {
      type: String,
      required: true,
    },

    arrivalCity: {
      type: String,
      required: true,
    },

    arrivalTime: {
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

    departureLat:{
      type:Number
    },

    departureLong:{
      type:Number
    },

    arrivalLat:{
      type:Number
    },

    arrivalLong:{
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

export default mongoose.model("Travel", TravelSchema);
