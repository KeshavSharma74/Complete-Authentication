import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import AppContent from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Navbar = () => {

    const navigate = useNavigate();
    const {isLoggedin,userData,backendUrl,setIsLoggedin,setUserData} = useContext(AppContent);

    const handleLogout = async()=>{
      try{
          const {data} = await axios.post(backendUrl+'/api/v1/auth/logout',{},{
            withCredentials:true
          });

          if(data.success){
            setUserData(false);
            setIsLoggedin(false);
            toast.success("Logged Out Successfully");
          }

      }
      catch(error){
        toast.error(error.message);
      }

    }

    const sendVerificationOTP = async()=>{
      try{
        const {data} = await axios.post(backendUrl+'/api/v1/auth/send-verify-otp',{},{
          withCredentials:true,
        });
        if(data.success){
          navigate('/email-verify')
          toast.success("OTP Sent Successfully");
        }
        else{
          toast.error(data.message);
        }
      }
      catch(error){
        toast.error(error.message);
      }
    }

    console.log(userData);
  return (
    <div className='flex justify-center relative top-5'>
        <div className='w-[90vw] flex justify-between items-center'>
            <img src={assets.logo} onClick={ () => navigate('/')} className='hover:cursor-pointer' alt="" />
            {
              (isLoggedin)? 
              (
              <div className='' >
                  <div className='font-bold bg-black w-8 h-8 flex justify-center items-center rounded-full text-[1.21rem] p-2 text-white group hover:cursor-pointer relative '>
                    {userData?.name?.[0]?.toUpperCase()}
                    <div className='w-[120px] hidden p-[0.4rem] text-[1.1rem] rounded-sm border-gray-400 border bg-gray-100 text-black absolute top-[2.05rem] group-hover:block ' >
                        <ul>
                          {!userData.isAccountVerified && <li onClick={sendVerificationOTP} className='hover:bg-gray-300 text-[1rem] p-1 text-gray-700 rounded-sm ' >Verify Email</li>}
                          <li onClick={handleLogout} className='hover:bg-gray-300 text-[1rem] p-1 text-gray-700 rounded-sm'>Logout</li>
                        </ul>
                    </div>
                  </div>
              </div>
            ) : 
              (
                <button onClick={ ()=> navigate('/login') } className='border border-gray-400  rounded-4xl px-5 py-2 flex gap-2 hover:bg-gray-200  hover:cursor-pointer transition-all transition-200' >
                  <p>Login</p>
                  <img src={assets.arrow_icon} alt="" />
                </button>
              )
            }
        </div>
    </div>
  )
}

export default Navbar