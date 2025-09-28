import React, { useContext, useEffect , useState} from 'react'
import { shopContext } from '../Context/Shopcontext'
import ProductItem from './ProductItem'

import Title from './Title'
export default function BestSeller() {
    const {products}= useContext(shopContext)
    const [BestSeller, setBestSeller] = useState([])

    useEffect(()=>{
        const bestProduct=products.filter(item=>item.bestSeller);
        setBestSeller(bestProduct.slice(0,5))
    },[products])
  
  return (
    <div>
        <Title t1="BEST" t2="SELLER"/>
        <div className='flex items-center justify-center text-gray-500'>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, accusantium ipsa temporibus beatae consequatur sint quisquam reiciendis.</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                BestSeller.map((item,index)=>{
                    return(

                        <ProductItem key={index+100} id={item._id} name={item.name} image={item.image} price={item.price}/>
                    )

                })

            }

        </div>

    </div>
  )
}
