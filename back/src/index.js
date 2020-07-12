
const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();


// Routes
const router = express.Router();
const AuthRoute = require('./routes/auth.route');



app.set("port", process.env.PORT);


app.use("/api/auth", router);
AuthRoute(router);

app.use(express.json());
app.use(router);




app.listen(process.env.PORT, () => {
    console.log(`server started at http://localhost:${process.env.PORT}`);
});