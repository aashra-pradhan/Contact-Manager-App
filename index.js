import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutes.js";
const app = express();

// configuring middleware to accept request body in the form of json
app.use(express.json());

// load environment variables from .env file
dotenv.config();

app.use(
  cors({
    origin: "*",
  })
);
const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use("/api/contacts", contactRoutes);

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected TO THE DB!");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => console.log("Connection failed", err.message));
