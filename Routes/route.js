const express = require("express");
const router = express.Router();

// import controllers
const { user } = require("../controller/Post");
const { GetAllusers } = require("../controller/Getuser");
// create api
router.post("/createuser", user);
router.get("/getalluser", GetAllusers);

module.exports = router;
