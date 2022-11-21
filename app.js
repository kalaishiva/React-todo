//To bring proces.env.PORT
require("dotenv").config();
const express = require("express");
const app = express();

const userRoutes = require("./Router/userRoutes");

app.get("/", userRoutes);

module.exports = app;