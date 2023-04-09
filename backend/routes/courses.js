// Dependencies
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { verifyUserToken } = require("../utils/authentication");

// Routes
router.post("/onCourse", verifyUserToken, async (req, res) => {
    try {
        const courses = req.user.courses;
        const currentCourse = req.body.currentCourse;

        const onCourse = courses.find((course) => {
            if (course.courseName === currentCourse) {
                return true
            }
        })

        if (onCourse) {
            res.send(courses.lessonOn)
        } else {
            res.send(false)
        }
        
    } catch (err) {
        res.status(400).send("Unknown Error has Occured!")
    }
})


module.exports = router