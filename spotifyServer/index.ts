
import express from 'express';
import cors from 'cors';



const main = async () => {


    const app = express();

    app.use(
        cors({
            origin: 'http://localhost:3700/',
            credentials: true
        })
    );

    app.get('/spotifyLogin',
        async function (req, res, next) {
            res.redirect('https://google.com');
        });

    app.get('/spotifyCallback',
        async function (req, res, next) {
            res.redirect('https://amazon.com');
        });
    app.listen(3800, () => {
        console.log("server started on port 3700");
    });
}




main().catch((err) => {
    console.error(err);
});

