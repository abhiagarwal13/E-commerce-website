import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
function OurPolicy() {

  return (
    <div className='flex   flex-col sm:flex-row justify-around items-center mt-[50px]'>
        <div className='flex flex-col justify-center items-center mb-10 w-[200px] h-[200px] border-1  border-gray-400 rounded-2xl'>
            <img src={assets.exchange_icon} alt=""  />
            <div className='font-bold font-mono text-center'>Easy Exchange</div>
            <div className='font-mono text-gray-500 text-center'>
                No hassel Easy return policy
            </div>

        </div>
       
        <div className='flex flex-col justify-center items-center mb-10 w-[200px] h-[200px] border-1 border-gray-400 rounded-2xl' >
            <img src={assets.quality_icon} alt=""  />
            <div className='font-bold font-mono text-center'>7 Day Return</div>
            <div className='font-mono text-gray-500 text-center'>
             7 Day Free Returns 
            </div>

        </div>
       
        <div className='flex flex-col justify-center items-center mb-10 w-[200px] h-[200px] border-1 border-gray-400 rounded-2xl'>
            <img src={assets.support_img} alt=""  />
            <div className='font-bold font-mono text-center'>Customer Support</div>
            <div className='font-mono text-gray-500 text-center'>
                Best Customer Support
            </div>

        </div>
       
    </div>
  )
}

export default OurPolicy