"use client"
import {createContext, useState} from 'react'

const Authenication=createContext({})

export const MyContextProvider=({children})=>{
    const [userState,setUserState]=useState(true);
    const [userData,setUserData]=useState("");

    return(
        <Authenication.Provider value={{
            userData,setUserData,userState,setUserState
        }}>
            {children}
        </Authenication.Provider>
    )
}

export default Authenication;