import express from 'express';
import { SPOTIFY_CLIENT_SECRET, SPOTIFY_TOKEN } from '../constants';
import request from 'request';


export const router = express.Router({
    strict: true
});


router.get('/spotifyLogin', async function (req, res, next) {
    const scopes = 'streaming user-read-private user-read-email user-read-playback-state';
    res.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + SPOTIFY_TOKEN +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent('http://localhost:3800/auth/spotifyCallback'));
});


router.get('/spotifyCallback', async function (req, res, next) {

    const code = req.query.code ?? null;

    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
            code: code,
            redirect_uri: 'http://localhost:3800/auth/spotifyCallback',
            grant_type: 'authorization_code'
        },
        headers: {
            'Authorization': 'Basic ' + (Buffer.from(SPOTIFY_TOKEN + ':' + SPOTIFY_CLIENT_SECRET).toString('base64'))
        },
        json: true
    };
    request.post(authOptions, function (error, response, body) {
        if (error && response.statusCode !== 200) {
            res.redirect('/');
        } else {
            res.cookie('token', body.access_token, { maxAge: 3600, sameSite: true });
            res.redirect('http://localhost:3000');
        }
    });
});

router.post("isAuthorized", async function (req, res) {
    const token: string = req.body.token;
    const options = {
        url: 'https://api.spotify.com/v1/me',
        headers: { 'Authorization': 'Bearer ' + token },
        json: true
    };

    let isAuth: boolean = false;
    request.get(options, function (error, response, body) {
        isAuth = error && response.statusCode === 200;
    });
});