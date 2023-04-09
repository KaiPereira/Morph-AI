// Dependencies
const express = require("express")
const router = express.Router()
const User = require("../models/User")

// Functions
const { verifyUserToken } = require("../utils/authentication.js")


router.post("/online", verifyUserToken, async (req, res) => {
    try {
        const user = req.user
        // Current date
        const date = new Date()
        const dayMonthYear = date.toLocaleDateString()

        // Date yesterday
        const yesterday = new Date(date)
        yesterday.setDate(yesterday.getDate() - 1)
        const dayMonthYearYesterday = yesterday.toLocaleDateString()

        if (user.lastLogin == dayMonthYearYesterday) {
            user.lastLogin = dayMonthYear
            user.dayStreak = user.dayStreak + 1
            await user.save()
        } else if (user.lastLogin !== dayMonthYear) {
            user.lastLogin = dayMonthYear
            user.dayStreak = 1
            await user.save()
        }

        res.send(req.user)
    } catch (err) {
        console.log(err)
        res.status(400).send("Unknown Error has Occured!")
    }
})


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