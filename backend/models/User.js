const mongoose = require("mongoose")

const CourseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    lessonOn: {
        type: Number,
        required: true
    },
    finished: {
        type: Boolean,
        default: false
    }
})

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    dayStreak: {
        type: Number,
        default: 0
    },
    lastLogin: {
        type: String
    },
    courses: [
        CourseSchema
    ],
    password: {
        type: String,
        require: true
    },
    verified: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model("users", UserSchema)