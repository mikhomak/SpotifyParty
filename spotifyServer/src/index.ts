
import express from 'express';
import cors from 'cors';
import { PORT, SPOTIFY_TOKEN } from './constants';


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
            res.send('hey');
            //res.redirect('https://amazon.com');
        });
    app.listen(PORT, () => {
        console.log("server started on port " + PORT);
    });
}




main().catch((err) => {
    console.error(err);
});

