import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './login.css'
import { registerUser } from "../apiUtils";
export const Register = () => {
    const [registerData, setRegisterData] = useState({
        email: '',password: '',confirmPassword: ''
    })
    const [errorMessage, setErrormesage] = useState({
        EmailErrorMessage: "",PasswordErrorMessage: "",confirmPasswordErrorMessage: ""
    })
    const navigate = useNavigate();

    const Emailvalidation = () => {
        var emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/
        if (emailRegex.test(registerData.email)) {
            setErrormesage((val) => ({ ...val, EmailErrorMessage: "" }))
        }
        else {
            setErrormesage((val) => ({ ...val, EmailErrorMessage: "Email shoud contain@ and .com" }))
        }
    }
    const Passwordvalidation = () => {
        if ((registerData.password).length > 5) {
            setErrormesage((val) => ({ ...val, PasswordErrorMessage: "" }))
        }
        else {
            setErrormesage((val) => ({ ...val, PasswordErrorMessage: "Password should contain atlease 6 characters" }))
        }
    }

    const HandleuserInput = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value })
        if(e.target.name==='email'){
            Emailvalidation()
        }
        else if(e.target.name==='password'){
            Passwordvalidation()
        }
        
    }
    const RegisterHandler = async (e) => {
        e.preventDefault()
        if (registerData.email === "" || registerData.password === "" || registerData.confirmPassword == "") { 
            alert("give all inputs")
           } else if(registerData.password !== registerData.confirmPassword){
            alert("password and confirm passwords are not matched")
        }else {
            registerUser(registerData).then(res => {
                alert(res.data.message)
                navigate('/');
            }).catch((err) => alert(err.response.data.message))

        }
    }
    return (
        <div className="login-reg">
            <div className="login-reg-container">
                <div className="center">
                    <div className="form-container">
                        <form onSubmit={(e) => RegisterHandler(e)}>
                            <h3 style={{fontFamily: "Acme" }} className="logintext">Register</h3>
                            <div>
                                <input type="text" className="inputs" name="email" placeholder="Email" onChange={(e) => HandleuserInput(e)} /><br />
                                <div className="errors">{errorMessage.EmailErrorMessage}</div>

                            </div>
                            <div>
                                <input type="text" className="inputs" name="password" placeholder="Password" onChange={(e) => HandleuserInput(e)} /><br />
                                <div className="errors">{errorMessage.PasswordErrorMessage}</div>

                            </div>
                            <div>
                                <input type="text" className="inputs" name="confirmPassword" placeholder="Confirm Password" onChange={(e) => HandleuserInput(e)} /><br />
                                <div className="errors">{errorMessage.confirmPasswordErrorMessage}</div>

                            </div>
                            <div style={{ display: "flex" }}>
                                <button className="sign-btn" style={{ width: "100px", margin: "auto", marginTop: "10px" }} type="submit">Register</button>

                            </div>
                        </form>
                        <div style={{ display: "flex" }}>
                            <Link style={{ margin: "auto" }} to="/"><button className="sign-btn" style={{ width: "100px" }}>LogIn</button></Link>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}