const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },

    surname: {
      type: String,
      required: true,
      min: 1,
      max: 20,
    },

    email: {
      type: String,
      required: true,
      max: 70,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      min: 6,
    },

    phone: {
      type: String,
      required: true,
      min: 10,
      max: 10,
      unique: true,
    },

    gender: {
      type: String,
      required: true,
    },

    pic: {
      type: String,
      default: "",
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
