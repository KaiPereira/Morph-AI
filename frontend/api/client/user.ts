// Our files
const apiUrl = process.env.NEXT_PUBLIC_API_URL

// Our libraries
import axios from "axios"

// Functions
import { getUserCourses } from "./courses"


export const fetchProfileDetails = async () => {
    try {
        const userProfile = await axios.post(`${apiUrl}/user/online`, {}, { withCredentials: true })

        return userProfile
    } catch (err) {
        throw err
    }
}


export const updateLoginDate = async () => {
    try {
        const loginDate = await axios.patch(`${apiUrl}/user/updateLogin`, {}, { withCredentials: true })

        return loginDate
    } catch (err) {
        throw err
    }
}