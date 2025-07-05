import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

  return (
    <div className='flex justify-center relative top-5'>
        <div className='w-[94vw] flex justify-between items-center'>
            <img src={assets.logo} onClick={ () => navigate('/')} className='hover:cursor-pointer' alt="" />
            <button onClick={ ()=> navigate('/login') } className='border border-gray-400  rounded-4xl px-5 py-2 flex gap-2 hover:bg-gray-200  hover:cursor-pointer transition-all transition-200' >
            <p>Login</p>
            <img src={assets.arrow_icon} alt="" />
            </button>
        </div>
    </div>
  )
}

export default Navbar