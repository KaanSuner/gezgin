const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const carpostRoute = require("./routes/carposts");
const housepostRoute = require("./routes/houseposts");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to database");
});

//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/carposts", carpostRoute);
app.use("/api/houseposts", housepostRoute);

app.listen(8800, () => {
  console.log("Backend server is running");
});
