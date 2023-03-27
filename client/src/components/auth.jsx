import React, { useContext, useEffect } from "react"
import { RegLogcontext } from "./context"
import { useNavigate } from "react-router-dom"
import { ViewProfile } from "./profile/viewProfile"
import { UploadProfile } from "./profile/uploadProfile"
import { EditdProfile } from "./profile/editProfile"
export const ViewAuthentication=()=>{
    const {isauthentiacated, setisauthenticated}=useContext(RegLogcontext)
    console.log(isauthentiacated)
    const navigate=useNavigate()

    const notokenfunction=()=>{
        if(!localStorage.getItem('token')){
            navigate('/')
            console.log(localStorage.getItem('token'))
        }
    }
    useEffect(()=>{
        if(localStorage.getItem('token')){
            setisauthenticated(true)
            console.log(localStorage.getItem('token'))
        }
        notokenfunction()
    },[])
    return(
        <>
            {isauthentiacated?<ViewProfile/>:notokenfunction()}
            
        </>
    )
}
export const UploadProfileAuthentication=()=>{
    const {isauthentiacated, setisauthenticated}=useContext(RegLogcontext)
    console.log(isauthentiacated)
    const navigate=useNavigate()

    const notokenfunction=()=>{
        if(!localStorage.getItem('token')){
            navigate('/')
            console.log(localStorage.getItem('token'))
        }
    }
    useEffect(()=>{
        if(localStorage.getItem('token')){
            setisauthenticated(true)
            console.log(localStorage.getItem('token'))
        }
        notokenfunction()
    },[])
    return(
        <>
            {isauthentiacated?<UploadProfile/>:notokenfunction()}
            
        </>
    )
}
export const EditProfileAuthentication=()=>{
    const {isauthentiacated, setisauthenticated}=useContext(RegLogcontext)
    console.log(isauthentiacated)
    const navigate=useNavigate()

    const notokenfunction=()=>{
        if(!localStorage.getItem('token')){
            navigate('/')
            console.log(localStorage.getItem('token'))
        }
    }
    useEffect(()=>{
        if(localStorage.getItem('token')){
            setisauthenticated(true)
            console.log(localStorage.getItem('token'))
        }
        notokenfunction()
    },[])
    return(
        <>
            {isauthentiacated?<EditdProfile/>:notokenfunction()}
            
        </>
    )
}