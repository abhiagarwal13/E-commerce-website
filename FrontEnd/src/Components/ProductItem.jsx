import React, { useContext } from 'react'
import { shopContext } from '../Context/Shopcontext'
import { Link } from 'react-router-dom';

export default function ProductItem({id,image,name,price}) {

    const {currency}=useContext(shopContext);
  return (
    <div className='flex flex-col items-center justify-center m-5 border-2 p-3 border-gray-300  rounded-md '>
       
        
<Link  to={`/product/${id}`} className='flex flex-col '>
<div>
    <div className='overflow-hidden transition-transform duration-1000 p-2'>

    <img src={image[0]} alt=""  className='overflow-hidden hover:scale-110 ease-in-out   '/>
    </div>
    <p className='text-gray-400'>{name}</p>
    <p>{currency}{price}</p>
</div>

</Link>


    </div>
  )
}
