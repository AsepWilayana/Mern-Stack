import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import BukuRoute from "./src/routes/index.js";
import bodyParser from 'body-parser';

import "./src/database/index.js";

const app = express()
const port = 4000

app.use(bodyParser.urlencoded({
    extended: true
  }));
  
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(BukuRoute)

app.listen(port, () => {
    console.log("Server berhasil!" + port);
})
