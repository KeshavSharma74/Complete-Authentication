import React, { useContext } from 'react'
import {assets} from '../assets/assets.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import AppContent from '../context/AppContext.jsx'

const Login = () => {

    const navigate = useNavigate();
    const {backendUrl,setIsLoggedin,getUserData} = useContext(AppContent);

    const submitHandler= async(e)=>{
      try{
        e.preventDefault();
        if(state==='signup'){
          const {data} =  await axios.post(backendUrl+'/api/v1/auth/register',{name,email,password},
            {
              withCredentials: true   
            }
          );
          if(data.success){
            setIsLoggedin(true);
            getUserData();
            toast.success('Registered Successfully')
            navigate('/');
          }
          else{
            toast.error(data.message);
          }
        }
        else{
          const {data} =await axios.post(backendUrl+'/api/v1/auth/login',{email,password},            {
              withCredentials: true   
            });
          if(data.success){
            setIsLoggedin(true);
            getUserData();
            toast.success('Loggedin Successfully')
            navigate('/');
          }
          else{
            toast.error(data.message);
          }
        }
      }
      catch(error){
        toast.error(error.message);
      }
    }
    const [state,setState] = useState('signup');
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
  return (
    <div className='flex justify-center relative bg-gradient-to-br from-cyan-300 via-indigo-300 to-indigo-400 h-[100vh] w-[100vw]' >
        <div className='w-[94vw] ' >
            <img src={assets.logo} onClick={ () => navigate('/')} className='mt-5 hover:cursor-pointer' alt="" />
            <div className='flex h-[80vh]  justify-center items-center'>

                <div className='bg-slate-900 flex px-8 py-8 flex-col gap-4 justify-center items-center text-white w-[350px] rounded-lg'>
                    
                  <div className='text-4xl font-bold' >{state==="signup" ? "Create Account" : "Login Account" } </div>

                  <div className='text-[0.95rem] text-purple-300'>{state==="signup" ? "Create your account " : "Login to your account"}</div>
                  
                <form className='flex flex-col gap-4 w-full'>

                  {
                  state==="signup" && 
                  <div className=' flex gap-3 items-center bg-gray-700 w-full px-5 py-2 rounded-3xl'>
                    <img src={assets.person_icon} className=' ' alt="" />
                    <input 
                    onChange={ (e) => setName(e.target.value) }
                    value={name}
                    type="text" placeholder='Full Name' required className='w-full outline-none placeholder:text-gray-200 '/>
                  </div>
                  }
                  
                

                  <div className=' flex gap-3 items-center bg-gray-700 w-full px-5 py-2 rounded-3xl'>
                    <img src={assets.mail_icon} className=' ' alt="" />
                    <input 
                    onChange={ (e)=>setEmail(e.target.value) }
                    value={email}
                    type="email" placeholder='Email id' required className='w-full outline-none  placeholder:text-gray-200 '/>
                  </div>

                  <div className=' flex gap-3 items-center bg-gray-700 w-full px-5 py-2 rounded-3xl'>
                    <img src={assets.lock_icon} className=' ' alt="" />
                    <input 
                    onChange={ (e)=>setPassword(e.target.value) }
                    value={password}
                    type="password" placeholder='Password' required className='w-full outline-none placeholder:text-gray-200 '/>
                  </div>

                
                <div onClick={ () => navigate('/reset-password')} className=' hover:cursor-pointer text-left self-start text-purple-300 text-[0.95rem]'>Forgot Password?</div>

                <div onClick={submitHandler} className='font-bold bg-gradient-to-r from-indigo-500 to-indigo-600 w-full px-5 py-2 rounded-3xl flex items-center justify-center hover:cursor-pointer'>{state==="signup"? "Sign Up" : "Login"}</div>

                </form>

                {
                  state==="signup" &&                 
                  <div className='flex gap-1 text-gray-300'>
                    Already have an account?  
                    <span onClick={ ()=> setState("login") } className='text-blue-400 underline hover:cursor-pointer'>Login here</span>
                  </div>
                }

                {
                  state==="login" &&                 
                  <div className='flex gap-1 text-gray-300'>
                    Don't have an account? 
                    <span onClick={ ()=> setState("signup") } className='text-blue-400 underline hover:cursor-pointer'>Sign up</span>
                  </div>
                }


                </div>

            </div>

        </div>

    </div>
  )
}

export default Login