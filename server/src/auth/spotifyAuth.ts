import express from 'express';

export const router = express.Router();


router.get('/spotifyLogin',
    async function (req, res, next) {
        res.redirect('https://google.com');
    });

router.get('/spotifyCallback',
    async function (req, res, next) {

    });