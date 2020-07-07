const express = require("express");
const router = express.Router();

const { userSignupValidator } = require("../validator");
const {listUser , createCategory} = require("../controllers/user")

router.get("/listofusers" ,listUser);

router.post("/createcat" , createCategory)
module.exports = router;
