// Our libraries
import axios from "axios"
import Cookies from 'js-cookie';

// Our files
import apiUrl from "../../config"


export const signup = async (
    email: string,
    password: string
) => {
    try {
        const newUser = await axios.post(`${apiUrl}/authentication/register`, {
            email: email,
            password: password
        }, { withCredentials: true })



        return newUser
    } catch (err) {
        throw err
    }
}

export const signin = async (
    email: string,
    password: string
) => {
    try {
        const user = await axios.post(`${apiUrl}/authentication/login`, {
            email: email,
            password: password
        }, { withCredentials: true })


        return user
    } catch (err) {
        throw err
    }
}


export const logout = async () => {
    try {
        const logout = await axios.post(`${apiUrl}/authentication/logout`, {}, { withCredentials: true })

        // Reload the page to change the page
        window.location.href="/"

        return logout
    } catch (err) {
        throw err
    }
}

export const verifyEmail = async (userId: string, token: string) => {
    try {
        let verify: any = await axios.get(`${apiUrl}/authentication/verify/${userId}/${token}`)

        return verify.data
    } catch (err) {
        throw err
    }
}