import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import AppContent from '../context/AppContext'

const Header = () => {

  const {userData} = useContext(AppContent);

  return (
    <div className='flex justify-center items-center h-[80vh] mt-4'>
        <div className='flex flex-col gap-1 h-[full] items-center justify-center w-[420px]'>
            <img src={assets.header_img} className='h-[130px] rounded-full' alt="" />
            <div className='flex justify-center items-center gap-2 mt-1'>
                <h1 className='items-center text-2xl font-bold'>Hey {(userData)? userData.name : "Developer" } ! </h1>
                <img src={assets.hand_wave} className='h-8' alt="" />
            </div>
            <h1 className='text-4xl font-extrabold'>Welcome to our app</h1>
            <p className='items-center text-center mt-[3px] text-gray-600'>Let's start with a quick product tour and will have you up and running in no time! </p>
            <button className='border border-gray-400 rounded-4xl px-5 py-2 hover:bg-gray-200  hover:cursor-pointer transition-all transition-200 mt-2' >
                <p>Get Started</p>
            </button>
        </div>
    </div>
  )
}

export default Header