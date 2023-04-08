// Dependencies
const express = require("express")
const router = express.Router()
const User = require("../models/User")

// Functions
const { verifyUserToken } = require("../utils/authentication.js")


router.post("/online", verifyUserToken, async (req, res) => {
    try {
        const user = req.user;
        const date = new Date();
        const dayMonthYear = date.toLocaleDateString();

        // We convert the lastLogin to a full date
        const lastLoginDate = new Date(user.lastLogin);
        const currentDate = new Date();

        // Calculate the time difference between current date and last login date in milliseconds
        const timeDifference = currentDate - lastLoginDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

        // Remove the streak if it's been 2 dats
        if (daysDifference <= 2) {
            user.lastLogin = dayMonthYear;
            user.dayStreak = user.dayStreak + 1;
        } else {
            user.dayStreak = 0;
        }

        await user.save();
        res.send(req.user);
    } catch (err) {
        console.log(err);
        res.status(400).send("Unknown Error has Occured!");
    }
});


router.patch("/updateLogin", verifyUserToken, async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.user.id)

        res.send(user)
    } catch (err) {
        console.log(err)
        res.status(400).send("Unknown Error has Occured!")
    }
})

module.exports = router