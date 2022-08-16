const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOOSE_URL_CONNECTION, (error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Mongoose connected")
    }
})


router.post("/register", userController.register);

router.post("/login", userController.login);

module.exports = router;
