import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
function Footer() {
  return (
    <div className='mb-[50px]'>
        <div className='flex mt-[30px] flex-col sm:flex-row'>
            <div className=' flex justify-center flex-col flex-2 sm:p-[40px]'>
                <div>
                    <img src={assets.logo} alt="" className='w-[100px]'/>
                </div>
                <div className='text-[12px] text-gray-400 p-[30px] pl-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, nesciunt dicta accusamus nemo odit sit dignissimos, molestiae omnis at amet ea! Temporibus odio sequi, esse obcaecati modi inventore doloribus dolores!
                </div>

            </div>
            <div className='flex-1 flex justify-center flex-col sm:p-[60px]  pb-[40px]'>
                <div >
                    Company
                </div>
                <div className='text-[12px] text-gray-400 p-[30px] pl-0  pb-[40px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorum ipsa quidem.
                </div>

            </div>
            <div className='flex-1 flex justify-center flex-col sm:p-[60px] pb-[40px]'>
                <div>
                    Get-in-touch
                </div>
                <div className='text-[12px] text-gray-400 p-[30px] pl-0 pb-0'>
                    222300909442424
                </div>
                <div className='text-[12px] text-gray-400 p-[30px] pl-0 pt-0'>
                    contact@gmail.com
                </div>

            </div>
        </div>
        <div className='h-[2px] w-[100%] bg-gray-200 mb-[30px]'>

        </div>
        <div className='flex items-center justify-center'>
            <div className='text-gray-500'>
                Copyright - All right Reserved
            </div>
        </div>
    </div>
  )
}

export default Footer