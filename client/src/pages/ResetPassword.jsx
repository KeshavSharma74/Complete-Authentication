import React, { useState, useRef, useContext, useEffect } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import AppContent from '../context/AppContext';

const ResetPassword = () => {
  const OTP_LENGTH = 6;
  const navigate = useNavigate();
  const inputRefs = useRef([]);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(''));
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1);

  const { backendUrl } = useContext(AppContent);

  useEffect(() => {
    if (step === 2 && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [step]);

  const sendOtp = async () => {
    try {
      const { data } = await axios.post(backendUrl + '/api/v1/auth/send-reset-otp', { email });
      if (data.success) {
        toast.success("OTP sent to your email");
        setStep(2);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleVerifyOtp = () => {
    const otpString = otp.join('');
    if (otpString.length !== OTP_LENGTH) {
      toast.error("Please enter full 6-digit OTP");
      return;
    }
    setStep(3);
  };

  const handleResetPassword = async () => {
    try {
      const otpString = otp.join('');
      const { data } = await axios.post(backendUrl + '/api/v1/auth/reset-password', {
        email,
        otp: otpString,
        newPassword
      });

      if (data.success) {
        toast.success("Password reset successfully");
        navigate('/login');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').trim();
    if (pasteData.length === OTP_LENGTH && !isNaN(pasteData)) {
      const valueArr = pasteData.split('');
      setOtp(valueArr);
      inputRefs.current[OTP_LENGTH - 1]?.focus();
    }
  };

  return (
    <div className='flex justify-center relative bg-gradient-to-br from-cyan-300 via-indigo-300 to-indigo-400 h-[100vh] w-[100vw]'>
      <div className='w-[94vw]'>
        <img src={assets.logo} onClick={() => navigate('/')} className='mt-5 hover:cursor-pointer' alt="logo" />
        <div className='flex h-[80vh] justify-center items-center'>
          <div className='bg-slate-900 flex px-8 py-8 flex-col gap-4 justify-center items-center text-white w-[400px] min-h-[300px] rounded-lg'>

            {/* Step 1: Email Input */}
            {step === 1 && (
              <>
                <div className='text-3xl font-bold'>Reset Password</div>
                <div className='text-[0.95rem] text-purple-300'>Enter your registered email address</div>

                <div className='flex gap-3 items-center bg-gray-700 w-full px-5 py-2 rounded-3xl mt-4'>
                  <img src={assets.mail_icon} alt="mail" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email id'
                    className='w-full outline-none placeholder:text-gray-200 bg-transparent text-white'
                  />
                </div>

                <div
                  onClick={sendOtp}
                  className='font-bold bg-gradient-to-r from-indigo-500 to-indigo-600 w-full px-5 py-2 rounded-3xl flex items-center justify-center hover:cursor-pointer'
                >
                  Submit
                </div>
              </>
            )}

            {/* Step 2: OTP Input */}
            {step === 2 && (
              <>
                <div className='text-3xl font-bold'>Enter OTP</div>
                <div className='text-[0.95rem] text-purple-300'>Enter the 6-digit code sent to your email</div>

                <div className='flex gap-2 mt-4'>
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => inputRefs.current[index] = el}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onPaste={handlePaste}
                      className="w-12 h-12 text-xl text-center rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-slate-800 text-white"
                    />
                  ))}
                </div>

                <div
                  onClick={handleVerifyOtp}
                  className='font-bold bg-gradient-to-r from-indigo-500 to-indigo-600 w-full px-5 py-2 rounded-3xl flex items-center justify-center hover:cursor-pointer mt-4'
                >
                  Submit
                </div>
              </>
            )}

            {/* Step 3: New Password Input */}
            {step === 3 && (
              <>
                <div className='text-3xl font-bold'>New Password</div>
                <div className='text-[0.95rem] text-purple-300'>Enter your new password</div>

                <div className='flex gap-3 items-center bg-gray-700 w-full px-5 py-2 rounded-3xl mt-4'>
                  <img src={assets.lock_icon} alt="lock" />
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder='New Password'
                    className='w-full outline-none placeholder:text-gray-200 bg-transparent text-white'
                  />
                </div>

                <div
                  onClick={handleResetPassword}
                  className='font-bold bg-gradient-to-r from-indigo-500 to-indigo-600 w-full px-5 py-2 rounded-3xl flex items-center justify-center hover:cursor-pointer mt-4'
                >
                  Submit
                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
