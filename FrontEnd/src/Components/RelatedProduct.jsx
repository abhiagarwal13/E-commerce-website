import React, { useEffect } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { useState,useContext } from 'react';
import { shopContext } from '../Context/Shopcontext';
import ProductItem from './ProductItem';

function RelatedProduct({category,subCategory}) {
    const {products}=useContext(shopContext);
    const [Related, setRelated] = useState([])
    useEffect(()=>{
        let productCopy=products.slice();
        productCopy=productCopy.filter((item)=>{
            if(item.category==category && item.subCategory==subCategory){
                return true;
            }
            return false;

        })
        productCopy=productCopy.slice(0,Math.min(productCopy.length,5));
        setRelated(productCopy)
        
    },[])
  return Related.length>0? (
    <div>
        <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {
                Related.map((items,index)=>{

                    return(

                        <ProductItem key={index} id={items._id} image={items.image} name={items.name} price={items.price} />
                    )
                })
            }

        </div>
    


    </div>
  ):null
}

export default RelatedProduct