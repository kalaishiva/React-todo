const express = require("express");


const router = express.Router();
const { home } = require("../Controllers/userControllers")

router.get("/", home);

module.exports = router;