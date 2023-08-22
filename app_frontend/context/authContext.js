import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import React from "react"

export const AuthContext = createContext()

export const BANK_API = axios.create({
    baseURL :  "http://10.76.29.151:8000/",
    headers : {
        // Authorization : `Bearer ${AsyncStorage.getItem("@refresh_token")}`,
        'Content-Type': 'application/json',
    },
})

const login_api = "bank/login/"
const register_api = "bank/register/"

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)
    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        isLoggedIn()
    }, [])

    const login = async (username, password, PIN) => {
        try{
            setIsLoading(true)
            const response = await BANK_API.post(login_api, {username, password, PIN})
            const refresh_token = response.data.refresh_token
            const user_info = response.config.data

            setUserInfo(user_info)
            console.log('user info', user_info)
            setUserToken(refresh_token)
            AsyncStorage.setItem('@refresh_token', refresh_token)
            AsyncStorage.setItem('@userInfo', user_info)
            setIsLoading(false)

        } catch(e) {
            alert("Invalid credentials. Please provide the correct credentials")
            console.log(`Error during login ${e}`)
        }
    }

    const register = async (username, email, PIN, password) => {
        try{
            setIsLoading(true)
            const response = await BANK_API.post(register_api, {username, email, PIN, password})
            const access_token = response.data.access_token
            const refresh_token = response.data.refresh_token
            const user_info = response.config.data

            console.log('user info', user_info)
            console.log('Refresh_token', refresh_token)
            AsyncStorage.setItem('@refresh_token', refresh_token)
            AsyncStorage.setItem('@access_token', access_token)
            AsyncStorage.setItem('@userInfo', user_info)
            setUserToken(refresh_token)
            setUserInfo(JSON.parse(user_info))
            setIsLoading(false)
        }
        catch (error) {
            console.log(`Error during registration ${error}`)
        }
    }

    const logout = () => {
        setIsLoading(true)
        AsyncStorage.removeItem('@refresh_token')
        AsyncStorage.removeItem('@access_token')
        AsyncStorage.removeItem('@userInfo')
        setUserToken(null)
        setIsLoading(false)   
    }

    const isLoggedIn = async() => {
        try{
            setIsLoading(true)
            let token = await AsyncStorage.getItem('@refresh_token')
            let userinfo = await AsyncStorage.getItem('@userInfo')
            userinfo = JSON.parse(userinfo)

            if (userinfo) {
                setUserInfo(userinfo)
                setUserToken(token)
                setIsLoading(false)
            }
           
        } catch (e) {
            console.log(`Error logged in ${e}`)
        }
    }

   
    return (
        <AuthContext.Provider value={{isLoading, userToken, login, logout, userInfo, register}}>
            {children}
        </AuthContext.Provider>
    )

}