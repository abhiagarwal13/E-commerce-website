import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../Context/Shopcontext'
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Login() {
  const [currentState, setcurrentState] = useState("Login");
  const [name,setname]=useState("")
  const [password, setpassword] = useState("")
  const [email,setemail]=useState("");
  const {login,setlogin,navigate,backendUrl,token,settoken}=useContext(shopContext);
  const onSubmitHandler=async (e)=>{
    e.preventDefault()
    console.log("clicked")
    try {
      if(currentState=='Login'){
        const response = await axios.post(backendUrl+'/api/user/login',{email,password})
                console.log(response)

        if(response.data.success){
          
          settoken(response.data.token)
          localStorage.setItem('token',response.data.token)
          toast.success(response.data.message)

        }
        else{
          toast.error(response.data.message)
        }

      }
      else{
        const response = await axios.post(backendUrl+'/api/user/register',{email,password,name})
        console.log(response)
        if(response.data.success){
          
          settoken(response.data.token)
          localStorage.setItem('token',response.data.token)
          toast.success(response.data.message)
        }
        else{
          
          toast.error(response.data.message)
        }

      }
      // setname("")
      // setemail("")
      // setpassword("")
    
      
    } catch (error) {
      toast.error(error.message)
      console.log(error.message)
      
    }

  }
  useEffect(()=>{
    if(token){
      navigate('/')
    }

  },[token])
 
  return (
    <div className='w-full'>
      <form onSubmit={onSubmitHandler} action="" className='py-20 w-full'>
        <div className='w-full flex flex-col items-center'>
        <div className='text-5xl  w-full flex justify-center items-center font-serif '>
         
          <div className='relative pb-10 flex justify-center items-center'>
            {currentState}
          <div className='h-[2px] w-[50px] bg-black absolute  top-[25%] right-[-60px] '>

          </div>
            
            </div>

        

          
        </div>
        <div className='flex flex-col items-center w-full gap-3 '>
            {
        currentState=="Sign Up"? 
          <div className='flex justify-center h-12 items-center w-[100%]'>
           <input onChange={(e)=>{setname(e.target.value)}} value={name} type="text" placeholder='Name' className='border-1  w-[30%] px-4 py-2 text-gray-600 '  />

        </div>:""
        }
        <div className='flex justify-center h-12 items-center  w-[100%]'>
           <input onChange={(e)=>{setemail(e.target.value)}} value={email} type="email" placeholder='Email' className='border-1  w-[30%] px-4 py-2 text-gray-600 '  required/>

        </div>
        <div className='flex justify-center h-12 items-center  w-[100%]'>
           <input onChange={(e)=>{
            setpassword(e.target.value)
           }} value={password} type="password" placeholder='Password' className='border-1  w-[30%] px-4 py-2 text-gray-600 ' required  />

        </div>
        <div className='flex w-full justify-center '>
          <div className='w-[30%] flex items-center justify-between text-gray-500'>


          <div>
            Forgot Your Password ?

          </div>
          {
            currentState==="Sign Up"? <div onClick={()=>{setcurrentState("Login")}} className="cursor-pointer">
            Login Here

          </div>: <div onClick={()=>{setcurrentState("Sign Up")}}  className="cursor-pointer">
            Create Account

          </div>

          }
         
          </div>
        </div>
        <div>
          <button  className='bg-black text-white px-10 py-2 active:bg-gray-500'>
            {
              currentState==='Login'?"SignIn":"SignUp"
            }
          </button>
        </div>
          
        </div>

        </div>

      
      </form>
    </div>
  )
}
