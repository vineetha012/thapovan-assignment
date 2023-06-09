import React, { createContext, useState } from "react";
export const RegLogcontext = createContext()
export const RegLogcontextProvider = ({ children }) => {
    const [token, setToken] = useState(null)
    const [isauthentiacated, setisauthenticated] = useState(false)
    const [profile, setProfile] = useState(null)
    return (
        <RegLogcontext.Provider value={{ token,profile, setProfile, setToken, isauthentiacated, setisauthenticated }}>
            {children}
        </RegLogcontext.Provider>
    )
}
