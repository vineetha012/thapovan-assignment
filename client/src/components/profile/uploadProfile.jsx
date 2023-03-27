import { useState } from 'react'
import axios from 'axios'
import { postProfile } from '../apiUtils'
import { Nav } from '../navbar/Nav'
import '../loginAndRegister/login.css'
import profile from '../../asserts/avathar.jpeg'
import { useNavigate } from 'react-router-dom'
export const UploadProfile = () => {
    const [createProfile, setCreateProfile] = useState({
        name: "", Image: "", DOB: "", skills: "", gender: "",
        experience: "", linkedIn: ""
    })
    const [isloading, setIsloading] = useState(false)
    const navigate = useNavigate()
    const submitPost = (e) => {
        e.preventDefault()
        // console.log(createProfile)
        if (createProfile.Image) {
            postProfile(createProfile)
                .then(res => {
                    console.log(res)
                    navigate('/ViewProfilehome')
                }).catch(err => console.log(err))
        } else {
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
                // setImage(res.data.url)
                setCreateProfile({ ...createProfile, Image: res.data.url })
                setIsloading(false)
            })
            .catch(err => console.log(err))
    }
    const HandleuserInput = (e) => {
        setCreateProfile({ ...createProfile, [e.target.name]: e.target.value })
    }
    return (
        <>
            <Nav />
            <div className=" middle-container d-flex justify-content-center h-100 w-100">
                <div className="main-pro-container">
                    <h1 style={{ textAlign: "center", color: "black" }}>Upload Profile</h1>
                    <div className="post-create">
                        <form className='createpost' onSubmit={(e) => submitPost(e)}>
                            <div className='container'>
                                <div className="image-container">
                                    <img style={{ width: "120px", height: "120px", border: "4px solid green" }}
                                        src={createProfile.Image ? createProfile.Image : profile}
                                    />
                                </div>
                            </div>
                            <div className='imageupload'>
                                <div className='cols'>
                                    <span>Upload Profile Image</span>
                                    <input type="file" onChange={(e) => imageHandler(e.target.files[0])} />
                                </div>
                            </div>
                            {isloading ? <h4 className='loading'>please wait image is uploading....</h4> : ""}
                            <div className='rows'>
                                <div className='cols'>
                                    <label>Name</label>
                                    <input type="text" placeholder="post name" name='name' value={createProfile.title} onChange={(e) => HandleuserInput(e)} />
                                </div>
                                <div className='cols'>
                                    <label>DOB</label>
                                    <input type="date" placeholder="Post " name='DOB' value={createProfile.DOB} onChange={(e) => HandleuserInput(e)} />
                                </div>
                            </div>
                            <div className='rows'>
                                <div className='cols'>
                                    <label>Major Skill</label>
                                    <input type="text" placeholder="Post Skills" name='skills' value={createProfile.skills} onChange={(e) => HandleuserInput(e)} />
                                </div>
                                <div className='cols'>
                                    <label>Gender</label>
                                    <select type="text" placeholder="Post Description" name='gender' value={createProfile.gender} onChange={(e) => HandleuserInput(e)} >
                                        <option value="">Select</option>
                                        <option value="Female">Female</option>
                                        <option value="Male">Male</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>                           
                                <div className='cols' style={{margin:"0px 35px 0px 35px"}}>
                                    <label>Experience</label>
                                    <input type="text" placeholder="Post Description" name='experience' value={createProfile.experience} onChange={(e) => HandleuserInput(e)} />
                                </div>
                                <div className='cols' style={{margin:"0px 35px 0px 35px"}}>
                                    <label>linkedIn</label>
                                    <input type="link" placeholder="Link" name='linkedIn' value={createProfile.linkedIn} onChange={(e) => HandleuserInput(e)} />
                                </div>                    
                            <div className='rows'>
                                <button type='submit' name='name' className="updatePOst">Update</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}
// name: "", Image: "", : "", DOB: "", skills: "", gender: "",
// experience: "", linkedIn: ""