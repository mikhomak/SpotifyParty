// lib/app.ts
import express = require('express');
import * as SpotifyWebApi from 'spotify-web-api-js';
// Create a new express application instance
const app: express.Application = express();
let spotify = new SpotifyWebApi.default();

app.get('/', function (req, res) {
  spotify.getAccessToken();
  res.send('Hello World!' + spotify.getAccessToken());
});

app.listen(3500, function () {
  console.log('Example app listening on port 3500!');
});

app.get('/login', function(req, res) {
  let my_client_id = 'homakhaker';
  let redirect_uri = 'http://localhost:3500/';

  var scopes = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' + my_client_id +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent(redirect_uri));
  });