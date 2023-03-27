import React from "react";
import { useNavigate } from 'react-router-dom'
import './nav.css'
export const Nav = () => {
    const navigate = useNavigate()
    const logouthandler = (e) => {
        navigate('/')
        localStorage.clear()//clearing the localstorage it will prevent the user to redirect private routes
    }
    return (
        <div className="NavBar w-100% h-col bg-dark d-flex  justify-content-between align-items-center">
            <div className="logo text-white" style={{ fontFamily: "Righteous",marginLeft:"20px" }}>Profile App</div>
            <div>
                <button className="btn btn-secondary btn-lg active" style={{ marginRight:"20px" }} role="button" aria-pressed="true" onClick={(e) => logouthandler(e)}>Logout
                    <i className="fa fa-arrow-right" style={{ color: "white" ,}} aria-hidden="true"></i>
                </button>               
            </div>
        </div>
    )
}
