// Dependencies
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const env = require("dotenv/config")
const path = require("path");
const session = require("express-session");
var SQLiteStore = require("connect-sqlite3")(session);
const passport = require("passport");
const cookieParser = require('cookie-parser');
const cron = require('node-cron');
const User = require("./models/User")
const moment = require('moment-timezone');


// Our MIDDLEware
const app = express()
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json())
app.use(cookieParser());


// Our server
app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 5000")
})


// This is a cron job that updates our user streak
cron.schedule('0 0 * * *', () => {
    User.updateMany({ lastLogin: moment().subtract(1, 'day').toDate() }, { $inc: {streak: 1} })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
})



// Our routes
// Authentication
const authentication = require("./routes/authentication.js")
app.use("/authentication", authentication)

// User stuff
const user = require("./routes/user.js")
app.use("/user", user)


// Our Mongo db
mongoose.connect(process.env.SRV_URL)
