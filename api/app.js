// introduce middleware
import express from "express";
import cors from "cors";
import model from "./models/index.js";
import routes from "./routes/index.js";
import mongoose from "mongoose";

const app = express();
// parse requests of content-type - application/json
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded());

app.use(cors());
routes(app);    
//database name
mongoose.connect('mongodb://localhost:27017/mycollection');

export default app;