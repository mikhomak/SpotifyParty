
const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();


// Routes
const router = express.Router();
const AuthRoute = require('./routes/auth.route');



app.set("port", process.env.PORT);


app.use("api/auth", router);
AuthRoute(router);

app.use(express.json());
app.use(router);

app.get('/login', function (req, res) {
    var scopes = 'user-read-private user-read-email';
    res.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + process.env.SPOTIFY_CLIENT_ID +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent('http://localhost:3500/yes'));
});



app.listen(process.env.PORT, () => {
    console.log(`server started at http://localhost:${process.env.PORT}`);
});