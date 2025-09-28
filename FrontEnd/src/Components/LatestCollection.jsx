import React, { useContext, useEffect,useState } from 'react'
import { shopContext } from '../Context/Shopcontext'
import { products } from '../assets/frontend_assets/assets'
import Title from './Title';
import ProductItem from './ProductItem';



function LatestCollection() {
    const {products}=useContext(shopContext);
    const [product, setproduct] = useState([]);
    useEffect(()=>{
        setproduct(products.slice(0,5));
        // console.log(product)

        
    },[products])
    // useEffect(()=>{
    //     console.log(product)

    // },[product])
  return (
    <div className='pt-20 pb-20'>
        <Title t1="LATEST" t2="COLLECTION"></Title>
        <div>
            <div className='flex justify-center items-center text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sequi temporibus illum?
                
            </div>

        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            product.map((items,index)=>{ 
             
                return (
                <ProductItem key={index} id={items._id} image={items.image} name={items.name} price={items.price}/>
            )})
        }
        </div>
    </div>
  )
}

export default LatestCollection