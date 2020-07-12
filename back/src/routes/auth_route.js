const express = require("express");
const app = express();
const dotenv = require('dotenv');


const authController = require('../controller/auth.conttroller');








module.exports = (router) => {
    router.post("/login", authController.login);
};




const SpotifyStrategy = require('passport-spotify').Strategy;
passport.use(
    new SpotifyStrategy(
        {
            clientID: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
            callbackURL: `http://localhost:${process.env.PORT}/auth/spotify/callback`
        },
        function (accessToken, refreshToken, expires_in, profile, done) {
            User.findOrCreate({ spotifyId: profile.id }, function (err, user) {
                return done(err, user);
            });
        }
    )
);

app.get('/auth/spotify', passport.authenticate('spotify'), function (req, res) {
    // The request will be redirected to spotify for authentication, so this
    // function will not be called.
});

app.get(
    '/auth/spotify/callback',
    passport.authenticate('spotify', { failureRedirect: '/login' }),
    function (req, res) {
        console.log("cool")
        res.redirect('/');
    }
);