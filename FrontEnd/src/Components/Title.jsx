import React from 'react'

export default function Title({t1,t2}) {
  return (
    <div className=' h-[40px] flex gap-2 items-center justify-center text-[25px] relative pb-0 mb-0 '>
        <div className='text-gray-500'>
            {t1}

        </div>
        <div>
            {t2}

        </div>
        <div className='flex items-center justify-start '>

        <div className='w-[40px] h-[2px] bg-black mt-0'>
        </div>

        </div>

    </div>
  )
}
