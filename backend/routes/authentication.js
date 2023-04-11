// Dependencies
const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const User = require("../models/User")
const passport = require('passport');
const GoogleStrategy = require('passport-google-oidc');
const emailValidator = require('deep-email-validator')

// For future Google Auth - need to configure consent screen
// passport.use(new GoogleStrategy({
//     clientID: process.env['GOOGLE_CLIENT_ID'],
//     clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
//     callbackURL: '/oauth2/redirect/google',
//     scope: [ 'profile' ]
//   }, async function verify(issuer, profile, cb) {

//     try {
//         const user = await User.findOne({
//             email: profile.emails[0].value
//         })
    
//         if (user) {
//             return cb(null, user)
//         } else {
//             const newUser = new User({
//                 email: profile.emails[0].value,
//                 id: profile.id,
//                 provider: issuer
//             })

//             const user = await newUser.save()

//             return cb(null, user)
//         }

//     } catch (err) {
//         res.status(400).send("Unknown Error has Occured!")
//         return cb(err)
//     }
//   }));


// Functions
const { verifyUserToken, jwtCreation } = require("../utils/authentication.js")

// Routes
router.post("/register", async (req, res) => {
    try {

        // Validate email
        const validation = await emailValidator.validate(req.body.email)

        if (validation.valid) {
            // Test to see if the user already exists
            const emailExists = await User.findOne({
                email: req.body.email
            })

            if (!emailExists) {
                //Hash password
                const hashedPassword = bcrypt.hashSync(req.body.password, 8);

                const newUser = new User({
                    email: req.body.email,
                    password: hashedPassword
                })

                const savedUser = await newUser.save()
                
                jwtCreation(res, savedUser, "Successfully registered!")
            } else {
                res.status(400).send("Email already exists!")
            }
        } else {
            res.status(400).send("Invalid email!")
        }
    } catch (err) {
        console.log(err)
        res.status(400).send("Unknown Error has Occured!")
    }
})


router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        })

        if (user) {
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
        res.clearCookie("token")
        res.send("Successfully logged out!")
    } catch (err) {
        res.status(400).send("Unknown Error has Occured!")
    }
})

module.exports = router;