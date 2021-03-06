
import express from 'express';
import cors from 'cors';
import { PORT } from './constants';
import { router as authRouter } from './routes/auth';
import bodyPasrser from 'body-parser';

const main = async () => {


    const app = express();

    app.use(
        cors({
            origin: 'http://localhost:3000',
            credentials: true
        })
    );

    app.use(bodyPasrser.json());
    app.use('/auth', authRouter);


    app.listen(PORT, () => {
        console.log("server started on port " + PORT);
    });
}




main().catch((err) => {
    console.error(err);
});

