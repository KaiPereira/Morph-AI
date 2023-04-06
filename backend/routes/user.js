// Dependencies
const express = require("express")
const router = express.Router()
const User = require("../models/User")
const moment = require('moment-timezone');

// Functions
const { verifyUserToken } = require("../utils/authentication.js")


router.post("/profile", verifyUserToken, async (req, res) => {
    try {
        res.send(req.user)
    } catch (err) {
        res.status(400).send("Unknown Error has Occured!")
    }
})


router.patch("/updateLogin", verifyUserToken, async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.user.id , { lastLogin: moment().toDate() })

        res.send(user)
    } catch (err) {
        console.log(err)
        res.status(400).send("Unknown Error has Occured!")
    }
})

module.exports = router