/**
 * TODO:
 * - Setup express to catch get requests
 * - Implement MongoDB
 *      - Store api keys with dotenv
 * - Research what the fuck all of this is lol
 */

const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const dotenv = require('dotenv'); // dotenv to store api keys when required
const uuid = require('uuid'); // used for randomizing secret


const PORT = 3000;
const secret = uuid.v4();
const app = express(); // initializing express

// enables cors
app.use(
    cors({
        origin: 'https://localhost.com:' + PORT,
        credentials: true
    })
);

// initializes new express session
app.use(
    session({
        secret: secret,
        resave: true,
        saveUninitialized: true
    })
)

app.use(cookieparser(secret));



app.listen(PORT = null ? 3000 : PORT, () => console.log('Server listening at port ' + PORT)) // opens express server to start listening for port PORT

