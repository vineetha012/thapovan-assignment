import { useContext, useEffect, useState } from "react"
import { RegLogcontext } from "../context"
import avathar from '../../asserts/avathar.jpeg'
import { getProfile } from "../apiUtils"
import { useNavigate } from "react-router-dom"
import { Nav } from "../navbar/Nav"
export const ViewProfile = () => {
    const { profile, setProfile } = useContext(RegLogcontext)
    const [displayblock, setDisplayblock] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        getProfile().then(res => {
            console.log(res)
            setProfile(res.Profile)
        })
    }, [])
    const email = localStorage.getItem('email')
    const handleDisplay = () => {
        setDisplayblock(!displayblock)
    }
    console.log(profile)
    return (
        <>
            <Nav />
            <div className="middle-container d-flex justify-content-center h-100 w-100">
                <div className="main-pro-container" >
                    <h1 style={{ fontFamily: "Acme" }}>Profile</h1>
                    <div>
                        <div className="image-container">
                            <img src={profile && profile.Image ? profile.Image : avathar} width="120px" height="120px" />
                        </div>
                        <div className="text-center" style={{ fontFamily: "Abel" }}> {email}</div>
                        <div className="personal">
                            <div className=" d-flex flex-row align-items-center justify-content-center" onClick={handleDisplay}>
                                <h3 className="text-center">Personal Details</h3>
                                <div>
                                    <i className="fa fa-caret-down" style={{ display: displayblock ? "none" : "block" }} aria-hidden="true"></i>
                                    <i className="fa fa-caret-up" style={{ display: displayblock ? "block" : "none" }} aria-hidden="true"></i>
                                </div>

                            </div>
                            <div style={{ display: displayblock ? "block" : "none" }}>
                                <div className="detail">
                                    <label>Name</label>
                                    {profile && <div>{profile.name}</div>}
                                </div>
                                <div className="detail">
                                    <label>DOB</label>
                                    {profile && <div>{profile.DOB}</div>}
                                </div>
                                <div className="detail">
                                    <label>skills</label>
                                    {profile && <div>{profile.skills}</div>}
                                </div >
                                <div className="detail">
                                    <label>gender</label>
                                    {profile && <div>{profile.gender}</div>}
                                </div>
                                <div className="detail">
                                    <label>experience</label>
                                    {profile && <div>{profile.experience}</div>}
                                </div>
                                <div className="detail">
                                    <label>linkedIn</label>
                                    {profile && <div>{profile.linkedIn}</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="privacy  d-flex flex-row align-items-center justify-content-center">
                            <i className="fa fa-user-secret" aria-hidden="true"></i>
                            <h3>Privacy Policy</h3> </div>
                        <div className="settings  d-flex flex-row align-items-center justify-content-center"><i className="fa fa-cog" aria-hidden="true"></i>
                            <h3>Settings</h3>
                        </div>
                    </div>
                    <div>
                        {(profile) ?
                            <div className="edit">
                                <button className="editbutton" onClick={() => navigate('/EditProfile')}>Edit</button>
                            </div> :
                            <div className="upload-pop">
                                <div className="upload">
                                    <div className="upload-text">Click here to Upload your profile</div>
                                    <div className="upload-Btn"><button onClick={() => navigate('/uploadProfile')}>upload Profile</button></div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}