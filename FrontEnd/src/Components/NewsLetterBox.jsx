import React from 'react'

export default function NewsLetterBox() {
    const onSubmitHandler=(event)=>{
        event.preventDefault()

    }
  return (
    <div>
        <div className='flex justify-center items-center flex-col '>
            <div className='text-2xl m-2 mb-1 font-bold font-mono'>
                Subscribe and get 20% off
            </div>
            <div className='text-gray-500 pb-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sequi! Cumque, dolores.
            </div>
            
                <form action=""  onSubmit={onSubmitHandler} className='flex align-center'>

                <input type="text" placeholder='Enter your Email' className='border-2 border-gray-200 w-[400px] h-[40px]' required/>
                <button type='submit' className='bg-gray-800 text-white text-[10px] h-[40px] w-[120px]'>
                    Subscribe
                </button>

                </form>
            
        </div>
    </div>
  )
}
