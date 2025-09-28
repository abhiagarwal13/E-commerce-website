import React, { useContext, useEffect, useState } from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { shopContext } from '../Context/Shopcontext'
import axios from 'axios'
import { toast } from 'react-toastify'
export default function PlaceOrder() {
  const {navigate,backendUrl,token,cartItems,setcartItems,delivery_fee,products,getCartTotal}=useContext(shopContext)
  const [option, setoption] = useState("cod")
 
  const [formData, setformData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:"",
  })
  const onChangeHandler=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setformData(prev=>({...prev,[name]:value}))



  }
  // useEffect(
  //   ()=>{
  //     console.log(formData);
  //   }
  // ,[formData])
  const onSubmitHandler=async (e)=>{
    e.preventDefault()
    try {

      const ordersItems=[];
      console.log(cartItems)
      for(const items in cartItems){
        for(const item in cartItems[items]){
          if(cartItems[items][item]>0){

            const itemInfo=structuredClone(products.find((data)=>data._id===items))
            if(itemInfo){
              itemInfo.size=item
              itemInfo.quantity=cartItems[items][item]
              ordersItems.push(itemInfo)

            }
          }
        }
      }
      const OrderData={
        address:formData,
        items:ordersItems,
        amount:Number(Number(getCartTotal())+Number(delivery_fee))
        
      }
        console.log("Orderdata",OrderData)

      
      if(option=='cod'){

        const response= await axios.post(backendUrl+"/api/order/place",OrderData,{headers:{token}})
                 console.log("response",response)

        if(response.data.success){
          // setcartItems({})
          navigate('/orders')
          toast.success("Order Placed")
  
        }
        else{
          toast.error(response.data.message)
        }
      }
      else if(option=='razorpay'){
         const response= await axios.post(backendUrl+"/api/order/razorpay",OrderData,{headers:{token}})

        if(response.data.success){
          setcartItems({})
          navigate('/orders')
          toast.success("Order Placed")
  
        }
        else{
          toast.error(response.data.message)
        }

      }
      else if(option=='stripe'){
         const response= await axios.post(backendUrl+"/api/order/stripe",OrderData,{headers:{token}})
        //  console.log(response)
        if(response.data.success){
          setcartItems({})
          navigate('/orders')
          toast.success("Order Placed")
  
        }
        else{
          toast.error(response.data.message)
        }

      }
      // console.log(ordersItems)
    } catch (error) {
      console.log(error)
    }


  }
  return (
    <form onSubmit={onSubmitHandler} className=' xl:flex xl:justify-around '>
      <div className='sm:w-[650px] flex flex-col justify-start p-15'>
        <div className='pb-4'>
           <div className=' h-[40px] flex gap-2 items-center text-[25px] relative pb-0 mb-0 '>
        <div className='text-gray-500'>
            DELIVERY

        </div>
        <div>
            INFORMATION

        </div>
        <div className='flex items-center justify-start '>

        <div className='w-[40px] h-[2px] bg-black mt-0'>
        </div>

        </div>

    </div>

        </div>
        <div className='w-[100%] flex flex-col sm:flex-row gap-3 '>
          <input value={formData.firstName} onChange={onChangeHandler} type="text" name="firstName" id="" placeholder='First name' className='border-2 border-gray-100 px-2 py-1 flex-1' required/>
          <input  value={formData.lastName} onChange={onChangeHandler} type="text" name="lastName" id="" placeholder='Last name' className='border-2 border-gray-100 px-2 py-1 flex-1'  required/>

        </div>
        <div className='mt-3'>
          <input  value={formData.email} onChange={onChangeHandler} type="text" name="email" id="" placeholder='Email Address' className='border-2 border-gray-100 px-2 py-1 w-[100%]'  required/>


        </div>
        <div className='mt-3'>
          <input  value={formData.street} onChange={onChangeHandler} type="text" name="street" id="" placeholder='Street' className='border-2 border-gray-100 px-2 py-1 w-[100%]'  required/>


        </div>
          <div className='w-[100%] flex flex-col sm:flex-row gap-3 mt-3'>
          <input  value={formData.city} onChange={onChangeHandler} type="text" name="city" id="" placeholder='City' className='border-2 border-gray-100 px-2 py-1 flex-1'  required/>
          <input  value={formData.state} onChange={onChangeHandler} type="text" name="state" id="" placeholder='State' className='border-2 border-gray-100 px-2 py-1 flex-1'  required/>

        </div>
          <div className='w-[100%] flex flex-col sm:flex-row gap-3 mt-3'>
          <input  value={formData.zipcode} onChange={onChangeHandler} type="text" name="zipcode" id="" placeholder='Zipcode' className='border-2 border-gray-100 px-2 py-1 flex-1'  required/>
          <input  value={formData.country} onChange={onChangeHandler} type="text" name="country" id="" placeholder='Country' className='border-2 border-gray-100 px-2 py-1 flex-1'  required/>

        </div>
        <div className='mt-3'>
          <input  value={formData.phone} onChange={onChangeHandler} type="text" name="phone" id="" placeholder='Phone' className='border-2 border-gray-100 px-2 py-1 w-[100%]'  required/>


        </div>

      </div>
      <div className='px-15 sm:p-15'>
        <div>

        <div>
          <CartTotal/>

        </div>
        <div>
          <div>
              <div className='pb-4 pt-4'>
           <div className=' h-[40px] flex gap-2 items-center text-[20px] relative pb-0 mb-0 '>
        <div className='text-gray-500'>
            PAYMENT

        </div>
        <div>
            METHOD

        </div>
        <div className='flex items-center justify-start '>

        <div className='w-[40px] h-[2px] bg-black mt-0'>
        </div>

        </div>

    </div>

        </div>
        
          </div>
          <div className='flex gap-3 w-[200px] sm:w-auto flex-col sm:flex-row'>

          <div onClick={()=>{
            setoption('stripe')
          }} className=' border-2 border-gray-100 h-8 flex items-center px-3 gap-5'>
             <div className={`w-5 h-5 rounded-full border-1 border-gray-200 ${option=='stripe'?"bg-green-400":""} `}>


            </div>
            <div>
              <img src={assets.stripe_logo} alt="" className='w-12' />
            </div>
            
          </div>
          <div onClick={()=>{
            setoption('razorpay')
          }} className=' border-2 border-gray-100 h-8 flex items-center  px-3 gap-5'>
             <div className={`w-5 h-5 rounded-full border-1 border-gray-200 ${option=='razorpay'?"bg-green-400":""} `}>


            </div>
            <div>
              <img src={assets.razorpay_logo} alt="" className='w-18' />
            </div>
            
          </div>
          <div onClick={()=>{
            setoption('cod')
          }} className=' border-2 border-gray-100 h-8 flex items-center  px-3 gap-5 text-[12px]'>
            <div className={`w-5 h-5 rounded-full border-1 border-gray-200 ${option=='cod'?"bg-green-400":""} `}>


            </div>
            <div className='whitespace-nowrap overflow-hidden text-gray-400'>
              CASH ON DELIVERY
            </div>
            
          </div>


          </div>
          <div className='w-100% flex sm:justify-end pt-5  sm:p-5 md:pr-[30%]'>
            <button onClick={()=>[
          
          ]}   className=' bg-black text-white p-2 px-15 text-[15px]  active:bg-gray-600'>
              PLACE ORDER
            </button>
          </div>

        </div>

        </div>

      </div>


    </form>
  )
}
