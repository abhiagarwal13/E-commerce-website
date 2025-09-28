import React, { useContext } from 'react'
import { assets } from '../assets/frontend_assets/assets';
import { NavLink,Link } from 'react-router-dom';
import { useState } from 'react';
import { shopContext } from '../Context/Shopcontext';


export default function Navbar() {
          const [vis,setvis]= useState(false);
          const {setshowSearch,getCartItemsCount,noOfItems,navigate ,token,settoken,setcartItems}=useContext(shopContext)
          const logout=()=>{
            localStorage.removeItem('token')
            settoken('')
            setcartItems({})
            navigate('/login')
            

          }
          
  return (
    <div className='flex items-center justify-around sm:justify-around  p-2  sticky top-0 h-[50px] pt-3 bg-white z-50 shadow-md'>
        <div>

        <img src={assets.logo} alt=""  className='w-[150px]' />
        </div>
        <div className='hidden sm:flex justify-around  w-[400px] text-1xl'>
        
    <NavLink to="/Home"
     children={({ isActive }) => (
        <div className={`relative group flex items-center justify-center ${isActive ? "text-orange-400" : ""}`}>HOME

        <div className={`absolute  transition-all duration-300 top-5
          ${isActive? "w-[100%] h-[2px] bg-amber-500": "w-0 h-0 group-hover:w-[100%] group-hover:h-[2px] group-hover:bg-amber-500" }`}></div>
    </div>
  )}/>
    <NavLink to="/Contact"
     children={({ isActive }) => (
        <div className={`relative group  ${isActive ? "text-orange-400" : ""}`}>CONTACT

        <div className={`absolute  transition-all duration-300 top-5
          ${isActive? "w-[100%] h-[2px] bg-amber-500": "w-0 h-0 group-hover:w-[100%] group-hover:h-[2px] group-hover:bg-amber-500" }`}></div>
    </div>
  )}/>
    <NavLink to="/About"
     children={({ isActive }) => (
        <div className={`relative group flex items-center justify-center ${isActive ? "text-orange-400" : ""}`}>ABOUT

        <div className={`absolute  transition-all duration-300 top-5
          ${isActive? "w-[100%] h-[2px] bg-amber-500": "w-0 h-0 group-hover:w-[100%] group-hover:h-[2px] group-hover:bg-amber-500" }`}></div>
    </div>
  )}/>
    <NavLink to="/Collection"
     children={({ isActive }) => (
        <div className={`relative group flex items-center justify-center ${isActive ? "text-orange-400" : ""}`}>COLLECTION

        <div className={`absolute ml-1 transition-all duration-300 top-5
          ${isActive? "w-[100%] h-[2px] bg-amber-500": "w-0 h-0 group-hover:w-[100%] group-hover:h-[2px] group-hover:bg-amber-500" }`}></div>
    </div>
  )}/>
   
     
    </div>
    
        <div className='flex justify-around items-center w-[250px] sm:w-[200px]'>

        <div className=''>

    <img src={assets.search_icon} alt="" className='w-5 cursor-pointer' onClick={()=>{setshowSearch(true)}
      }  />
        </div>
  <div onClick={()=>{
    token?  null: navigate('/login')
  }} className="relative group  ">
    <div >
  <img
    src={assets.profile_icon}
    alt="profile"
    className="w-5 cursor-pointer"
  />
    </div>
    {
      token?
  <div
    className="absolute top-5 right--4  hidden group-hover:flex flex-col 
               bg-gray-50 gap-0.5 shadow-lg rounded-md p-1 w-24 z-50 hover:flex text-gray-400"
  >
    <div className="cursor-pointer hover:text-black text-sm">My Profile</div>
    <div onClick={()=>{
      navigate('/Orders')
    }} className="cursor-pointer hover:text-black text-sm">Orders</div>
    <div onClick={()=>{
      logout()
    }} className="cursor-pointer hover:text-black text-sm">Logout</div>
  </div>:
  ""

    }

 
</div>
<div>

  <Link to='/cart' className='relative'>
  <img src={assets.cart_icon} alt="" className='w-5' />
  <p className='absolute text-[7px] text-white bg-red-600 rounded-full w-[15px] h-[15px] text-center pt-0.5 top-2 right-[-23px]'>{getCartItemsCount()}</p>
  </Link>
</div>
  <div>
    <img src={assets.menu_icon} onClick={()=>{
     setvis(true);
    }} alt="" className='sm:hidden w-[24px]' />
  </div>



    </div>
    {vis && 
    <div className={`transition-all overflow-hidden  ${vis? "fixed inset-0 w-screen h-screen bg-white z-50 ":"w-0"}`}>
      <div className='flex  flex-col text-gray-600 border-b-4'>
        <div className='flex border-4  w-[100%] h-[56px] items-center justify-start cursor-pointer' onClick={()=>{setvis(false)}}>
          <img src={assets.dropdown_icon} alt=""  className='w-[25px] pl-3 pr-1 '/>
          <p>Back</p>
          

        </div>
        <NavLink to='/Home' className={`p-4 pl-6 cursor-pointer border-4`} onClick={()=>{setvis(false)}}>Home</NavLink>
        <NavLink to='/About' className={`p-4 pl-6 cursor-pointer border-4`} onClick={()=>{setvis(false)}}>About</NavLink>
        <NavLink to='/Collection' className={`p-4 pl-6 cursor-pointer border-4`} onClick={()=>{setvis(false)}}>Collection</NavLink>
        <NavLink to='/Cart' className={`p-4 pl-6  cursor-pointer border-4`} onClick={()=>{setvis(false)}}>Cart</NavLink>
       

      </div>

    </div>
    }
    </div>
      
  )
}
