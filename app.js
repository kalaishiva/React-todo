//To bring proces.env.PORT
require("dotenv").config();
//connected to DB
const { connectToDb } = require("./Config/db");

//express 
const express = require("express");
const app = express();

//model
const User = require("./Model/userModel");

//Router
const userRoutes = require("./Router/userRoutes");

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", userRoutes);

connectToDb();

module.exports = app;