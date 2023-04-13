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


// Our MIDDLEware
const app = express()
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json())
app.use(cookieParser());


// Our server
app.listen(process.env.PORT, () => {
    console.log("Server running on port 5000")
})


// Our routes
// Authentication
const authentication = require("./routes/authentication.js")
app.use("/authentication", authentication)

// User stuff
const user = require("./routes/user.js")
app.use("/user", user)

// Courses stuff
const courses = require("./routes/courses.js")
app.use("/courses", courses)


// Our Mongo db
mongoose.connect(process.env.SRV_URL)
