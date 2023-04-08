const env = require("dotenv/config")
const jwt = require("jsonwebtoken")
const User = require("../models/User.js")

// This is our main authentication
// Takes the cookie and verifies it
const verifyUserToken = async (req, res, next) => {
    try {
        const token = req.cookies.token

        if (!token) {
            return res.status(401).send("JWT Invalid!")
        }

        const verification = jwt.verify(token, process.env.JWT_SECRET)

        if (!verification) {
            return res.status(401).send("Invalid authorization!")
        }

        const user = await User.findById(verification.id)

        req.user = user

        // Grab our user details from the JWT if it passes all calls
        next()

    } catch (err) {
        console.log(err)
        res.status(400).send("Authentication failed!")
    }
}

const jwtCreation = async (res, user, message) => {
    try {
        const jwtPayload = {
            id: user._id,
            email: user.email
        }

        const token = jwt.sign(jwtPayload, process.env.JWT_SECRET, {expiresIn: '7d'})

        res.cookie('token', token, { httpOnly: true }).send(message)
    } catch (err) {
        console.log(err)
        res.status(400).send("Authentication failed!")
    }
}

module.exports = {
    verifyUserToken,
    jwtCreation
}