import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
export default function 
() {
  return (
    <div>
         <div className='flex items-center justify-center'>


      <div className='flex justify-center  h-[500px] w-full  mt-[10px] border-2 m-20 mb-4 ,t-3  border-gray-300'>
        <div className='w-1/2 flex flex-col items-center  justify-center overflow-hidden'>
     

        <div className='flex items-center justify-start gap-2 w-[200px]'>

          <div className='w-12 h-[2px] bg-gray-600'>

          </div>
          <div className=' text-gray-500'>
            Oure Best Seller
          </div>
        </div>
       
          <div className='text-4xl text-gray-600 font-serif '>
            Latest Arrival
          </div>
           <div className='flex items-center justify-end gap-2 w-[200px]'>
          <div className=' text-gray-500'>
            Shop Now
          </div>
          <div className='w-12 h-[2px] bg-gray-600'>

          </div>
        </div>

        </div>
        <div className='md:w-1/2 flex flex-shrink-0  w-0 '>
          <img src={assets.hero_img} alt="" className='h-[100%] w-[100%] flex-shrink-0'/>

        </div>
        
      </div>



      </div>

    </div>
  )
}
