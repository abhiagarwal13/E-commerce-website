import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { shopContext } from '../Context/Shopcontext'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'


export default function Cart() {
  const {products,currency,cartItems,updateQuantity,navigate}= useContext(shopContext)
  const [cartData,setcartData]=useState([])
  useEffect(()=>{
    const tempData=[];
    // console.log(cartItems) 
    for(const items in cartItems){
      
      for(const sizes in cartItems[items]){
        if(cartItems[items][sizes]==0){
          continue;
        }
        tempData.push({
          _id:items,
          sizes,quantity:cartItems[items][sizes]
        });
      }
    }
    // console.log("tempdata",tempData)
    setcartData(tempData)

  },[cartItems])
  // useEffect(()=>{
  //   console.log(cartData);
  // },[cartData])
 

  return (
    <div>
      <div>
        <div className='sm:p-[40px]'>
          <div className='flex justify-items-start'>
          <Title t1='YOUR' t2="CART"/>

          </div>
         <div className='border-b-2 border-gray-100'>

            {
              cartData.map((item,index)=>{
                const p=products.find((element)=>{
                  return element._id==item._id;
                })
                

                 return (  <div key={index} className=' border-t-2 mt-4 border-gray-100 flex  '>
                          <div className='flex w-[400px] sm:w-[500px] '>
                            <div className='flex items-center h-[120px] p-4'>
                              <img src={p.image[0]} alt="" className='w-[80px]' />
                            </div> 
                            <div className='p-4 flex flex-col '>
                              <div className='pb-2 font-semibold'>
                                {p.name}
                              </div>
                              <div className='flex gap-4 items-center'>
                                <div className='text-gray-600'>
                                  {currency}{p.price}
                                </div>
                                <div className='bg-gray-100 w-[30px] h-[30px] flex justify-center items-center border-[1px] rounded-[4px] border-gray-300 text-gray-600'>
                                  {item.sizes}
                                </div>

                              </div>
                            </div>
                          </div>
                          <div className='flex items-center justify-center pl-[30%]'>
                            <input onChange={(e)=>{updateQuantity(item._id,item.sizes,Number( e.target.value))} } type="number" name="" id="" min={1} defaultValue={item.quantity}  className='border-2 border-gray-100 w-10 px-1 py-1 sm:w-25 '/>
                          </div>
                          <div className='flex items-center justify-center pl-[10%]'>
                            <img src={assets.bin_icon} alt="" className='w-[20px]' onClick={()=>{updateQuantity(item._id,item.sizes,0)}}/>
                          </div>
 
                        </div>)
              }
              
              )
                
              }
         </div>
              <div className='w-[100%] flex sm:justify-end pt-10 sm:pt-0 sm:mt-10'>
                <div className='flex flex-col items-end '>

                <div>

                <CartTotal/>
                </div>
                <div>

                <button onClick={()=>{
                  navigate('/PlaceOrder')
                }} className='bg-black text-white p-3 m-3 text-[12px]'>PROCEED TO CHECKOUT</button>
                </div>
                </div>

              </div>
             

            
            
            
            





          

          




        </div>






      </div>
      


    </div>
  )
}
