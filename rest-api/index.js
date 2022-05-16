import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import carpostRoute from "./routes/carposts.js";
import housepostRoute from "./routes/houseposts.js";

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
