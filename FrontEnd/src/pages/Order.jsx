import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../Context/Shopcontext'
import axios from 'axios'

export default function Order() {
  const {currency,token,backendUrl}=useContext(shopContext)
const [orderData, setorderData] = useState([])  
const loadOrderData= async()=>{
  try {
    if(!token){
      return null
    }
    const response=await axios.post(backendUrl+"/api/order/userorders",{},{headers:{token}})
    // console.log("response",response.data)
    if(response.data.success){
      const allOrderItems=[]
      response.data.orders.map((order)=>{
        order.items.map((item)=>{
          item['status']=order.status
          item['payment']=order.payment
          item['paymentMethod']=order.paymentMethod
          item['date']=order.date,
          allOrderItems.push(item)
          

        })

      })
      setorderData(allOrderItems)
      // console.log(allOrderItems)
    }
  } catch (error) {
    console.log(error.message)
    
  }

}
useEffect(()=>{
  // console.log("order page")
  loadOrderData()
},[])
  return (
    <div className='sm:p-10'>
      <div>
          <div className=' h-[40px] flex gap-2 items-center text-[25px] relative pb-0 mb-0 '>
        <div className='text-gray-500'>
            MY

        </div>
        <div>
            ORDERS

        </div>
        <div className='flex items-center justify-start '>

        <div className='w-[40px] h-[2px] bg-black mt-0'>
        </div>

        </div>

    </div>
    <div className='border-t-2 border-gray-100 mt-10'>
      {
        orderData.map((items,index)=>{
          return (
            <div key={index} className='p-3 border-b-2 border-gray-100 ' >
              <div className='flex  flex-col gap-3 sm:flex-row items-center justify-between sm:h-25 pr-10'>
                <div className='flex  gap-3 w-[400px]'>
                  <div className=''>
                    <img src={items.image[0]} alt=""  className='w-18'/>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <div className=' text-gray-500'>
                      {items.name}
                    </div>
                    <div className='flex gap-3 text-[15px]'>
                      <div>
                        {currency}{items.price}


                      </div>
                      <div>
                        Quantity:{items.quantity}
                      </div>
                      <div>
                        Size:{items.size}
                      </div>
                    </div>
                    <div className='text-[12px]'>
                      Date: <span className='text-gray-400'>{new Date(items.date).toDateString() }</span>
                    </div>
                    <div className='text-[12px]'>
                      Payment: <span className='text-gray-400'>{items.paymentMethod }</span>
                    </div>
                  </div>
                 


                </div>
                <div>

                  <div className='flex gap-3 items-center'>
                    <div className='w-4 h-4 bg-green-500 rounded-full'>

                    </div>
                    <div className='text-[15px] text-gray-400'>
                      {items.status}
                    </div>
                  </div>
                </div>
                <div>
                  <button onClick={loadOrderData} className='w-30 border-2 border-gray-100 text-gray-600 px-3 active:bg-green-300 active:text-white'>Track Order</button>
                </div>
              </div>

            </div>
          )
        })

      }


    </div>

      </div>


    </div>
  )
}
