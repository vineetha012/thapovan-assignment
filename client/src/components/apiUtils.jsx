import axios from "axios"
const url = "http://localhost:5005"

export const postProfile = (createProfile) => {
    console.log(createProfile);
    //call create post api
    let response = fetch(`${url}/profile`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            'token': localStorage.getItem('token'),
            'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify(createProfile)
    }).then(res => (res.json()))
    return response
}
export const getProfile =  () => {
    const res =  fetch(`${url}/profile`, {
        method: 'GET',
        headers: {
            'token': localStorage.getItem('token'),
            'Access-Control-Allow-Origin':'*',
        }
    }).then(res=>res.json())
    console.log(res)
    return res;
}
export const registerUser = async (user) => {
    let res = await axios.post(`${url}/register`, user)
    return res
}
export const editProfileAPI =  (editProfile) => {
    console.log(editProfile)
    console.log( JSON.stringify(editProfile))
    const res =  fetch(`${url}/profile`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            'token': localStorage.getItem('token'),
            'Access-Control-Allow-Origin':'*',
        },
        body: JSON.stringify(editProfile)
    }).then(res=>res.json())
    
    return res
}