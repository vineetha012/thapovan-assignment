import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { editProfileAPI, EditProfileAPI, getProfile, postProfile } from '../apiUtils'
import { Nav } from '../navbar/Nav'
import '../loginAndRegister/login.css'
import profilepic from '../../asserts/avathar.jpeg'
import { useNavigate } from 'react-router-dom'
import { RegLogcontext } from '../context'
export const EditdProfile = () => {
    const [editProfile, setEditProfile] = useState({
        name: "", Image: "", DOB: "", skills: "", gender: "",
        experience: "", linkedIn: ""
    })
    const [isloading, setIsloading] = useState(false)
    const navigate = useNavigate()
    const {setProfile } = useContext(RegLogcontext)

    useEffect(() => {
        getProfile().then(res => {
            console.log(res)
            setEditProfile(res.Profile)
        })
    }, [])
    
    const submitPost = (e) => {
        e.preventDefault()
        console.log(editProfile)
        if (editProfile.Image) {
            console.log(editProfile)
            editProfileAPI(editProfile)
                .then(res => {
                    console.log(res)
                    setProfile(res.profile)
                    navigate('/ViewProfilehome')
                }).catch(err => console.log(err))
        }
        else {
            alert("please select image..")
        }

    }
    const imageHandler = (img) => {
        setIsloading(true)
        const formdata = new FormData()
        formdata.append("file", img)
        formdata.append("upload_preset", "blogs-app")
        axios.post("https://api.cloudinary.com/v1_1/dhtnrmzms/upload", formdata)
            .then(res => {
                setEditProfile({ ...editProfile, Image: res.data.url })
                setIsloading(false)
            })
            .catch(err => console.log(err))
    }
    const HandleuserInput = (e) => {
        setEditProfile({ ...editProfile, [e.target.name]: e.target.value })
    }
    console.log(editProfile)
    return (
        <>
            <Nav />
            <div className="middle-container d-flex justify-content-center h-100 w-100">
                <div className="main-pro-container">
                    <h1 style={{ textAlign: "center", color: "black" }}>Edit Profile</h1>
                    <form className='createpost' onSubmit={(e) => submitPost(e)}>
                        <div className='container'>
                            <div className="image-container">
                                <img style={{ width: "120px", height: "120px", border: "4px solid green" }}
                                    src={editProfile.Image ? editProfile.Image : profilepic}
                                />
                            </div>
                        </div>
                        <div className='imageupload'>
                            <div>
                                <div className='cols'>
                                    <span>Edit profile Image</span>
                                    <input type="file" onChange={(e) => imageHandler(e.target.files[0])} />
                                </div>
                            </div>
                        </div>
                        {isloading ? <h4 className='loading'>please wait image is uploading....</h4> : ""}
                        <div className='rows'>
                            <div className='cols'>
                                <label>Name</label>
                                <input type="text" placeholder="post name" name='name' value={editProfile.name} onChange={(e) => HandleuserInput(e)} />
                            </div>
                            <div className='cols'>
                                <label>DOB</label>
                                <input type="date" placeholder="Post " name='DOB' value={editProfile.DOB} onChange={(e) => HandleuserInput(e)} />
                            </div>
                        </div>
                        <div className='rows'>
                            <div className='cols'>
                                <label>Major Skill</label>
                                <input type="text" placeholder="Post Skills" name='skills' value={editProfile.skills} onChange={(e) => HandleuserInput(e)} />
                            </div>
                            <div className='cols'>
                                <label>Gender</label>
                                <select type="text" placeholder="Post Description" name='gender' value={editProfile.gender} onChange={(e) => HandleuserInput(e)} >
                                    <option value="">Select</option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className='cols' style={{margin:"0px 35px 0px 35px"}}>
                            <label>Experience</label>
                            <input type="text" placeholder="Post Description" name='experience' value={editProfile.experience} onChange={(e) => HandleuserInput(e)} />
                        </div>
                        <div className='cols' style={{margin:"0px 35px 0px 35px"}}>
                            <label>linkedIn</label>
                            <input type="link" placeholder="Link" name='linkedIn' value={editProfile.linkedIn ? editProfile.linkedIn : ""} onChange={(e) => HandleuserInput(e)} />
                        </div>
                        <div className='save-container cols'>
                            <button type='button' name='name' className="submitPOst" onClick={() => navigate('/ViewProfilehome')}>Back</button>
                            <button type='submit' name='name' className="submitPOst">Save</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
// name: "", Image: "", : "", DOB: "", skills: "", gender: "",
// experience: "", linkedIn: ""