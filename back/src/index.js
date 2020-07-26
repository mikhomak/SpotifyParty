
const express = require("express");
const app = express();
const dotenv = require('dotenv');
const passport = require('passport');
dotenv.config();


// Routes
const router = express.Router();
const AuthRoute = require('./routes/auth.route');



const SpotifyStrategy = require('passport-spotify').Strategy;

passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/'
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      User.findOrCreate({ spotifyId: profile.id }, function(err, user) {
        return done(err, user);
      });
    }
  )
);








app.set("port", process.env.PORT);


app.use("/api/auth", router);
AuthRoute(router);

app.use(express.json());
app.use(router);




app.listen(process.env.PORT, () => {
    console.log(`server started at http://localhost:${process.env.PORT}`);
});