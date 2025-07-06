import { useEffect, useState } from "react";
import AppContent from "./AppContext";
import axios from "axios";

const AppContextProvider = (props) =>{

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedin,setIsLoggedin] = useState(false);
    const [userData,setUserData] = useState(false);

    const getAuthState = async () => {
    try {
        const { data } = await axios.get(`${backendUrl}/api/v1/auth/is-auth`, {
        withCredentials: true,
        });

        if (data.success) {
        const user = await getUserData(); // only call if auth is true
        if (user) {
            setIsLoggedin(true);
            setUserData(user);
        } else {
            setIsLoggedin(false);
            setUserData(false);
        }
        } else {
        setIsLoggedin(false);
        setUserData(false);
        }
    } catch (error) {
        console.error("Auth check failed silently:", error.message);
        setIsLoggedin(false);
        setUserData(false);
    }
    };



    const getUserData = async() =>{
        console.log("login hogya aur get user data call hogya..!!")
        const {data} = await axios.get(backendUrl+'/api/v1/user/data',{
             withCredentials: true
        });
        if(data.success) setUserData(data.userData)
    }

    useEffect( ()=>{
        getAuthState();
    },[])
    

    const value={
        backendUrl,
        isLoggedin,setIsLoggedin,
        userData,setUserData,
        getUserData,
    }

    return (
        <AppContent.Provider value={value} >
            {props.children}
        </AppContent.Provider>
    )
}

export default AppContextProvider