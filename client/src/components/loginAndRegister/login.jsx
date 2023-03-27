import React, { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
export const LogIn = () => {
    const [loginData, setloginData] = useState({email: '',password: ''})
    const [errorMessage, setErrormesage] = useState({
        EmailErrorMessage: "",PasswordErrorMessage: ""
    })
    const navigate = useNavigate()
    const HandleuserInput = (e) => {
        setloginData({ ...loginData, [e.target.name]: e.target.value })
        validationUserInputs(e)
    }
    //validating email onchanging the value
    const validationUserInputs = (e) => {
        var emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/
        if (emailRegex.test(loginData.email)) {
            setErrormesage((val) => ({ ...val, EmailErrorMessage: "" }))
        }else {
            setErrormesage((val) => ({ ...val, EmailErrorMessage: "Email shoud contain@ and .com" }))
        }
    }
    //Login handler
    const LoginHandler = async (e) => {
        e.preventDefault()
        if (loginData.email === "" || loginData.password === "") {
            alert("give all credentials")
        }else if (errorMessage.EmailErrorMessage !== "" || errorMessage.PasswordErrorMessage !== "") {
            alert("please give valid credentials")
        }else {
            await axios.post("http://localhost:5005/login", loginData).then(
                (res) => {
                    if (res.data.status == 'Success') {
                        localStorage.setItem('token', res.data.token)
                        localStorage.setItem('email', res.data.user.email)
                        navigate('/ViewProfilehome')
                    }
                }
            ).catch((error) => {
                console.log(error.response.data)
                alert(error.response.data)
            })
       }
    }
    return (
        <div className="login-reg">
            <div className="login-reg-container">
                <div className="center">
                    <div className="form-container">
                        <form onSubmit={(e) => LoginHandler(e)}>
                            <h4 style={{ color: "white", fontFamily: "Yanone" }}>Profile App</h4>
                            <h3 style={{ fontFamily: "Abel" }} className="logintext">LogIn</h3>
                            <div>
                                <input className="inputs" type="text" name="email" placeholder="Email" onChange={(e) => HandleuserInput(e)} /><br />
                                <div className="errors">{errorMessage.EmailErrorMessage}</div>
                            </div>
                            <div>
                                <input className="inputs" type="text" name="password" placeholder="Password" onChange={(e) => HandleuserInput(e)} /><br />
                                <div className="errors">{errorMessage.PasswordErrorMessage}</div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <button className="sign-btn" style={{ width: "100px", margin: "auto", marginTop: "10px" }} type="submit">LogIn</button>
                            </div>
                        </form>
                        <div style={{ display: "flex" }}>
                            <Link style={{ margin: "auto" }} to="/register"><button className="sign-btn" style={{ width: "100px" }}>Register</button></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}