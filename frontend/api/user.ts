// Our files
import apiUrl from "../config"

// Our libraries
import axios from "axios"


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