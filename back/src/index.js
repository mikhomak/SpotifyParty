
const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = 3500; // default port to listen
// define a route handler for the default home page



app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.get('/login', function (req, res) {
    var scopes = 'user-read-private user-read-email';
    res.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + process.env.SPOTIFY_CLIENT_ID +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent('http://localhost:3500/yes'));
});


app.get('/yes', function (req, res) {
    console.log('yes');
})

// start the Express server
app.listen(process.env.PORT, () => {


    console.log(`server started at http://localhost:${process.env.PORT}`);
});