import React, { useContext } from 'react'
import { shopContext } from '../Context/Shopcontext'
import Title from './Title'

function CartTotal() {
    const {delivery_fee,currency,getCartTotal}=useContext(shopContext)
  return (
    <div className=''>
        <div className='flex flex-col w-[300px] sm:w-[600px] items-start '>
            <div className='pb-2'>
            <Title t1="CART" t2="TOTAL"/>

            </div>
           
            <div className='flex flex-col justify-around text-gray-500 gap-2'>
                <div className='flex justify-between sm:w-[600px] border-b-2 border-gray-100 h-[30px] '>
                    <div>
                        Subtotal
                    </div>
                    <div>
                        {currency}{getCartTotal()}
                    </div>
                </div>
                <div className='flex justify-between sm:w-[600px] border-b-2 border-gray-100 h-[30px]'>
                    <div>
                        Shipping Fee
                    </div>
                    <div>
                        {currency}{delivery_fee}
                    </div>
                </div>
                <div className='flex justify-between w-[300px] sm:w-[600px] h-[30px] text-black font-bold'>
                    <div>Total</div>
                    <div>
                        {currency}{getCartTotal()+delivery_fee}
                    </div>
                </div>
            </div>

            
        </div>

    </div>
  )
}

export default CartTotal