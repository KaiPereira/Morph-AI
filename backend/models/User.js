const mongoose = require("mongoose")

const CourseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    lessonOn: {
        type: Number,
        required: true
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
    // Password for username/password auth
    password: String,
    // Id and provider if there is no username and we're using google auth
    id: {
        type: String,
        required: function() {
            return !this.password; // require 'id' only if 'password' is not present
        }
    },
    provider: {
        type: String,
        required: function() {
            return !this.password; // require 'provider' only if 'password' is not present
        }
    }
})


module.exports = mongoose.model("users", UserSchema)