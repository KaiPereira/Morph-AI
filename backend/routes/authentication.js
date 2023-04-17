// Dependencies
const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const User = require("../models/User")
const Token = require("../models/VerificationToken")
const crypto = require("crypto");
const sendEmail = require("../utils/emailVerification.js")


// Functions
const { verifyUserToken, jwtCreation } = require("../utils/authentication.js")

// Routes
router.post("/register", async (req, res) => {
    try {

        // Test to see if the user already exists
        const emailExists = await User.findOne({
            email: req.body.email
        })

        if (!emailExists) {
            //Hash password
            const hashedPassword = bcrypt.hashSync(req.body.password, 8);

            const newUser = await new User({
                email: req.body.email.toLowerCase(),
                password: hashedPassword
            }).save()

            const newToken = await new Token({
                userId: newUser._id,
                token: crypto.randomBytes(32).toString("hex"),
            }).save()

            const message = `${req.headers.origin}/login/${newUser.id}/${newToken.token}`;
            await sendEmail(newUser.email, "Verify Email", message);

            res.send("A verification email was sent!");
        } else {
            res.status(400).send("Email already exists!")
        }
    } catch (err) {
        console.log(err)
        res.status(400).send("Unknown Error has Occured!")
    }
})

router.get("/verify/:id/:token", async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id });

        if (!user) return res.status(400).send("Invalid link");

            const token = await Token.findOne({
                userId: user._id,
                token: req.params.token,
            });

        if (!token) return res.status(400).send("Invalid link");

        await User.updateOne({ _id: user._id}, {verified: true});
        await Token.findByIdAndRemove(token._id);
        
        jwtCreation(res, user, "Successfully registered!")
    } catch (err) {
        console.log(err)
        res.status(400).send("An error occured");
    }
});


router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email.toLowerCase()
        })

        if (user) {

            if (!user.verified) return res.status(400).send("Please verify your email first!")

            const validPass = await bcrypt.compare(req.body.password, user.password);

            if (!validPass) {
                res.status(400).send("Invalid username or password!")
            }

            jwtCreation(res, user, "Successfully logged in!")
        } else {
            res.status(400).send("Invalid username or password!")
        }
    } catch (err) {
        console.log(err)
        res.status(400).send("Unknown Error has Occured!")
    }
})


router.post("/logout", verifyUserToken, async (req, res) => {
    try {
        res.clearCookie("token", { httpOnly: true, sameSite: "None", secure: true })
        res.send("Successfully logged out!")
    } catch (err) {
        res.status(400).send("Unknown Error has Occured!")
    }
})

router.get("/test", async (req, res) => {
    try {
        res.send("Test successful!")
    } catch (err) {
        res.status(400).send("Unknown Error has Occured!")
    }
})

module.exports = router;