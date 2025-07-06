import { useEffect, useState } from "react";
import AppContent from "./AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const AppContextProvider = (props) =>{

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedin,setIsLoggedin] = useState(false);
    const [userData,setUserData] = useState(false);

    const getAuthState = async() =>{
        try{
            const {data} = await axios.get(backendUrl+'/api/v1/auth/is-auth',{withCredentials:true});

            if(data.success){
                setIsLoggedin(true);
                getUserData();
            }

        }
        catch(error){
            toast.error(error.message);
        }
    }

    const getUserData = async() =>{
        console.log("login hogya aur get user data call hogya..!!")
        const {data} = await axios.get(backendUrl+'/api/v1/user/data',{
             withCredentials: true
        });
        (data.success)? setUserData(data.userData) : toast.error(data.message);
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