const express = require("express");
const passport = require('passport');
const router = express.Router();


const authController = require('../controller/auth.conttroller');



module.exports = (router) => {
    router.get("/login", passport.authenticate('spotify'),authController.login);
};




