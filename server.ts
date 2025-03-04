import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { AppDataSource } from "../src/_helper/db";
import userRoutes from "./users/user.controller";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("Connected to MySQL Database");
    app.listen(6969, () => console.log("Server running on port 6969"));
  })
  .catch((err) => console.error("Error connecting to database", err));