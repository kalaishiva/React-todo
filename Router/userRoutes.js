const express = require("express");


const { home, createUser, getUsers, editUsers, deleteUser } = require("../Controllers/userControllers")
const router = express.Router();

router.get("/", home);
router.post("/createUser", (createUser));
router.get("/getUsers", (getUsers));
router.put("/editUsers/:id", (editUsers))
router.delete("/deleteUser/:id", (deleteUser))




module.exports = router;