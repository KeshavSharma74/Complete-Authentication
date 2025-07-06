import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const EmailVerify = () => {

  const navigate = useNavigate();

  return (
        <div className='flex justify-center relative bg-gradient-to-br from-cyan-300 via-indigo-300 to-indigo-400 h-[100vh] w-[100vw]' >
            <div className='w-[94vw] ' >
                <img src={assets.logo} onClick={()=> navigate('/') } className='mt-5 hover:cursor-pointer' alt="" />
                <div className='flex h-[80vh]  justify-center items-center'>
    
                  <div className='bg-slate-900 flex px-8 py-8 flex-col gap-4 justify-center items-center text-white w-[400px] rounded-lg'>
                        
                      <div className='text-4xl font-bold' >Email Verify OTP</div>

                      <div className='text-[0.95rem] text-purple-300' >Enter the 6-digit code sent on your email id.</div>

                    </div>
                  </div>
                </div>
            </div>
  )
}

export default EmailVerify