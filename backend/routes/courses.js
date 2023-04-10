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

        const course = courses.find((c) => c.title === currentCourse);
        
        // If we're on it return the lesson we're on
        if (course) {
            res.send(course)
        } else {
            // If we're not on it, create and return it
            // Create the new course object
            const newCourse = {
                title: currentCourse,
                lessonOn: 0
            }

            // Update the user's courses
            const updatedUser = await User.findOneAndUpdate(
                { _id: req.user._id },
                { $push: { courses: newCourse } },
                { new: true }
            )

            // Grab the course we added
            const newlyAddedCourse = updatedUser.courses.find(c => c.title === currentCourse);

            res.send(newlyAddedCourse)
        }
        
    } catch (err) {
        console.log(err)
        res.status(400).send("Unknown Error has Occured!")
    }
})

router.post("/course-progress", verifyUserToken, async (req, res) => {
    try {
        const courses = req.user.courses;
        const currentCourse = req.body.currentCourse;

        const course = courses.find((c) => c.title === currentCourse);
        res.send(course)
    } catch (err) {
        console.log(err)
        res.status(400).send("Unknown Error has Occured!")
    }
})

router.post("/update-course-progress", verifyUserToken, async (req, res) => {
    try {
        const courses = req.user.courses;
        const currentCourse = req.body.currentCourse;
        const newLessonOn = req.body.onLesson;

        const course = courses.find((c) => c.title === currentCourse);

        // If we're on it return the lesson we're on
        if (course) {
            const updatedUser = await User.findOneAndUpdate(
                { _id: req.user._id, "courses.title": currentCourse },
                { $set: { "courses.$.lessonOn": newLessonOn } },
                { new: true }
            )

            res.send(updatedUser)
        } else {
            res.status(400).send("Course not found!")
        }
    } catch (err) {
        console.log(err)
        res.status(400).send("Unknown Error has Occured!")
    }
})


router.post("/finished-course", verifyUserToken, async (req, res) => {
    try {
        const courses = req.user.courses;
        const currentCourse = req.body.currentCourse;

        const course = courses.find((c) => c.title === currentCourse);

        // If we're on it return the lesson we're on
        if (course) {
            const updatedUser = await User.findOneAndUpdate(
                { _id: req.user._id, "courses.title": currentCourse },
                { $set: { "courses.$.finished": true } },
                { new: true }
            )

            res.send(updatedUser)
        } else {
            res.status(400).send("Course not found!")
        }
    } catch (err) {
        res.status(400).send(err)
    }
})


module.exports = router