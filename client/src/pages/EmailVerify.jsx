import React, { useState, useRef, useEffect, useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import AppContent from '../context/AppContext'
import { toast } from 'react-toastify'


const EmailVerify = () => {
  const navigate = useNavigate();
  const OTP_LENGTH = 6;
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const inputRefs = useRef([]);

  const { backendUrl, getUserData , userData , isLoggedin } = useContext(AppContent);

  const handleVerifyOTP = async () => {
    try {
      const otpString = otp.join("");
      const { data } = await axios.post(backendUrl + '/api/v1/auth/verify-email', { otp: otpString }, {
        withCredentials: true,
      });

      if (data.success) {
        toast.success("Email Verified Successfully");
        getUserData();
        navigate('/');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Focus on the first input box on mount
  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "") {
        if (index > 0) {
          inputRefs.current[index - 1].focus();
        }
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').trim();

    if (pasteData.length === OTP_LENGTH && !isNaN(pasteData)) {
      const valueArr = pasteData.split('');
      setOtp(valueArr);

      // Focus the last input box
      inputRefs.current[OTP_LENGTH - 1].focus();
    }
  };

  useEffect( ()=>{
    isLoggedin && userData && userData.isAccountVerified && navigate('/');
  },[userData,isLoggedin]);

  return (
    <div className='flex justify-center relative bg-gradient-to-br from-cyan-300 via-indigo-300 to-indigo-400 h-[100vh] w-[100vw]' >
      <div className='w-[94vw]'>
        <img src={assets.logo} onClick={() => navigate('/')} className='mt-5 hover:cursor-pointer' alt="logo" />
        <div className='flex h-[80vh] justify-center items-center'>

          <div className='bg-slate-900 flex px-8 py-8 flex-col gap-4 justify-center items-center text-white w-[450px] h-[340px] rounded-lg'>

            <div className='text-4xl font-bold'>Email Verify OTP</div>
            <div className='text-[0.95rem] text-purple-300'>Enter the 6-digit code sent on your email id.</div>

            <div className='flex gap-2 mt-4'>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={handlePaste}
                  className="w-13 flex justify-center items-center h-15 text-[1.8rem] text-center text-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xl font-semibold"
                />
              ))}
            </div>

            <button
              className='mt-6 bg-purple-600 hover:bg-purple-700 hover:cursor-pointer px-6 py-2 rounded text-white font-semibold'
              onClick={handleVerifyOTP}
            >
              Verify OTP
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailVerify
