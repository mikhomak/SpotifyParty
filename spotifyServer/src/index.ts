
import express from 'express';
import cors from 'cors';
import { PORT, SPOTIFY_TOKEN, SPOTIFY_CLIENT_SECRET } from './constants';
import request from 'request';

const main = async () => {


    const app = express();

    app.use(
        cors({
            origin: 'http://localhost:3000/',
            credentials: true
        })
    );

    app.get('/spotifyLogin',
        async function (req, res, next) {
            const scopes = 'user-read-private user-read-email';
            res.redirect('https://accounts.spotify.com/authorize' +
                '?response_type=code' +
                '&client_id=' + SPOTIFY_TOKEN +
                (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
                '&redirect_uri=' + encodeURIComponent('http://localhost:3800/spotifyCallback'));
        });

    app.get('/spotifyCallback',
        async function (req, res, next) {

            const code = req.query.code;

            var authOptions = {
                url: 'https://accounts.spotify.com/api/token',
                form: {
                    code: code,
                    redirect_uri: 'http://localhost:3800/spotifyCallback',
                    grant_type: 'authorization_code'
                },
                headers: {
                    'Authorization': 'Basic ' + (Buffer.from(SPOTIFY_TOKEN + ':' + SPOTIFY_CLIENT_SECRET).toString('base64'))
                },
                json: true
            };
            request.post(authOptions, function (error, response, body) {
                if (error) {
                    console.log('damn')
                }
                else {
                    console.log(response.body.access_token);
                }
            });


        });

    app.listen(PORT, () => {
        console.log("server started on port " + PORT);
    });
}




main().catch((err) => {
    console.error(err);
});

