const express = require("express");
const router = express.Router();


const authController = require('../controller/auth.conttroller');



module.exports = (router) => {
    router.get("/login", authController.login);
};




