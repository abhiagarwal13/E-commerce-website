import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopContext } from '../Context/Shopcontext'
import { assets } from '../assets/frontend_assets/assets'
import RelatedProduct from '../Components/RelatedProduct'
export default function Product() {
  const {id}=useParams()
  const {products,currency,addtoCart,setnoOfItems}=useContext(shopContext)
  const [projectData, setprojectData] = useState(false)
  const [imageData, setimageData] = useState('')
  const [Size, setSize] = useState("")
  const fetchData= async ()=>{
    products.map((items)=>{
      if(items._id==id){
        // console.log(items ,items.image[0])
        setprojectData(items);
        setimageData(items.image[0])
      }
      return null;

    })
  }
  useEffect(()=>{
    fetchData()
},[id])
  return projectData?(
    <div>
      <div>

      <div className=' flex flex-col sm:flex-row'>
        <div className='flex p-6'>

      <div className='flex  flex-col  justify-between gap-4 mr-4'>
        {
          projectData.image.map((items,index)=>{
            return (
              <img key={index} onClick={()=>{setimageData(items)}} src={items} className='w-24 ' ></img>
            )
          })
        }
        
      
      </div>
      <div className=''>
        <img src={imageData} alt="" className=' h-full' />
      </div>

        </div>
        <div className='sm:p-6 p-2 sm:w-[550px]'>
          <div className='flex flex-col gap-3'>
            <div className='font-semibold text-2xl'>
              {projectData.name}
            </div>
            <div className='flex items-center'>
              <div className='flex gap-1 w-[80px] h-3'>
                <img src={assets.star_icon} alt="" className='w-3'/>
                <img src={assets.star_icon} alt="" className='w-3'/>
                <img src={assets.star_icon} alt="" className='w-3'/>
                <img src={assets.star_icon} alt="" className='w-3'/>
                <img src={assets.star_dull_icon} alt="" className='w-3'/>
              </div>
              <div>
              (122)
              </div>


            </div>
            <div className='text-[25px]'>
              {currency} {projectData.price}
            </div>
            <div className='text-gray-400'>
              {projectData.description}
            </div>
            <div className='mt-4'>
              Select Size
            </div>
            <div className='flex gap-2 pt-4'>
              {
                projectData.sizes.map((item,index)=>{
                  return(

                    <button onClick={()=>{setSize(item)}} key={index} className={`w-10 h-10 bg-gray-100 p-3 flex items-center justify-center ${Size==item?"border-1 border-orange-300":""}`}>{item}</button>
                  )

                })
              }
            </div>
            <div className='mt-5'>
              <button onClickCapture={()=>{addtoCart(projectData._id,Size);}} className='bg-black text-white w-[150px] h-[40px] active:bg-gray-600 '>ADD TO CART</button>
            </div>
            <div className='w-[75%] h-[0.5px] bg-gray-400 mt-[20px] sm:mt-[30px]'>

            </div>
            <div className='text-gray-400 text-[12px] mt-4'>
              <div>
                100% Original Product
              </div>
              <div>
                Cash on Delivery Available on this product
              </div>
              <div>
                Easy Return and Exchange policy within 7 days
              </div>
            </div>
          </div>
        </div>
       


    
      </div>
      <div>

      <div className='flex pt-6 sm:p-6 sm:pb-0'>
        <div className='border h-8 w-30 flex items-center justify-center font-bold border-r-0 border-gray-300'>Description</div>
        <div className='border h-8 w-30 flex items-center justify-center border-gray-300 '>Reviews (122)</div>
      </div>
      <div className='flex flex-col gap-2 text-gray-500 sm:ml-6 p-4 sm:mr-60 border-2 border-gray-200 text-[12px]'>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quam rerum non alias voluptatem vero quo? Similique repudiandae cumque ab aliquam dignissimos libero natus voluptates consectetur impedit vitae corporis commodi, quaerat, maxime delectus, debitis nobis?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tempora doloremque quod eius aperiam soluta ab, perspiciatis alias repudiandae error ullam.
        </div>
      </div>
      </div>
      <RelatedProduct category={projectData.category} subCategory={projectData.subCategory}/>
      
      </div>

    </div>
  ): <div className=' opacity-0'></div>
}
