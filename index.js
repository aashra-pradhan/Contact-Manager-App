import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutes.js";
const app = express();

// configuring middleware to accept request body in the form of json
// middleware use garnuparyo ki app.use use garne ho, yo express.json is express kai built in middleware, aba esko satta
//body parser use garek bhaye boadyparser is external midlleware , jun hami package use garera tancham
app.use(express.json());

// load environment variables from .env file
dotenv.config();

app.use(
  cors({
    origin: "*",
  })
);

// we configured our error handling middle ware that we made ourself
app.use(errorHandler);

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
