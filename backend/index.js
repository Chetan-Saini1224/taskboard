import * as dotenv from "dotenv";
dotenv.config();
import db from "./config/mongoose.js";
import router from "./routes/api/v1/index.js";
import cors from "cors";

import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", router);
app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error while listening on Port ${PORT}`);
    return;
  }
  console.log(`Application is running on ${PORT}`);
});
