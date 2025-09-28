import { useContext,useEffect,useState } from 'react'
import React from 'react'
import { shopContext } from '../Context/Shopcontext'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../Components/Title';
import ProductItem from '../Components/ProductItem';
import RelatedProduct from '../Components/RelatedProduct';
export default function Collection() {

  const {products,showSearch,Search,setSearch}=useContext(shopContext);
  const [hid, sethid] = useState(true)
  const [product, setproduct] = useState([])
  const [Category, setCategory] = useState([])
  const [subCategory, setsubCategory] = useState([])
  const [Sortby, setSortby] = useState('normal');
  
    useEffect(()=>{
      setproduct(products)
      // console.log(products)
    },[])

    useEffect(()=>{applyFilter()},[Sortby])
    const applyFilter=()=>{
      let nproduct=products.filter((items)=>{
    
     if(subCategory.length===0){
       return true
     }
     return subCategory.includes(items.subCategory)
   }).filter((items)=>{
    if(Category.length===0){
       return true
     }
     return Category.includes(items.category)
   }
 )
      if(showSearch && Search){
        nproduct=nproduct.filter((items)=>{
          return items.name.toLowerCase().includes(Search.toLowerCase().trim())
        })}
           if(Sortby=='low-high'){
        nproduct.sort((a,b)=>{
          return a.price-b.price
        })
       
      }
      else if(Sortby=='high-low'){
        nproduct.sort((a,b)=>{
          return b.price-a.price
        })
       
      }
   setproduct(nproduct)

    }
  const toggleCategory=(e)=>{
    if(Category.includes(e.target.value)){
   
      setCategory( Category.filter((x)=>{ 
        return x!==e.target.value;
      }))
    }
    else{
      
      setCategory([...Category, e.target.value]);
    }
  }
  const toggleSubCategory=(e)=>{
    if(subCategory.includes(e.target.value)){
    
      setsubCategory(subCategory.filter((x)=>{ 
        return x!==e.target.value;
      }))
    }
     else{
     
      setsubCategory([...subCategory,e.target.value])
    }


  }
  // useEffect(()=>{
  //   console.log(product);
  // },[product])
  useEffect(()=>{applyFilter()},[Category,subCategory,Search])
  return (
    <div className='p-10 sm:flex flex-col sm:flex-row'>
      <div className='flex flex-col gap-4 transition-all duration-300 ease-in-out pb-10'>
        <div className='text-2xl pl-2 flex gap-2 items-center'>
          <div>
            FILTERS
          </div>
          <div className='sm:hidden'>

          <img src={assets.dropdown_icon} alt="" className={`w-[10px] ${hid?"":"rotate-90"} `} onClick={
            ()=>{
              sethid(!hid);
            }
          }/>
          </div>
        </div>

        <div className={`flex flex-col pl-4 pt-2 pb-2 gap-2 w-[300px] border-[0.2px] ${hid?"hidden":""} border-gray-400 rounded-[5px] sm:block `}>
          <div className='text-[15px] pb-2  font-medium text-gray-600'>
            CATEGORIES

          </div>
          <div  className='flex w-[20px] gap-3 text-gray-400'>
          <input type="checkbox" value={'Men'} onClick={toggleCategory}/>
          <div>
            Men
          </div>

          </div>
          <div className='flex w-[20px] gap-3 text-gray-400'>
          <input type="checkbox" value={'Women'} onClick={toggleCategory}/>
          <div>
            Women
          </div>

          </div>
          <div className='flex w-[20px] gap-3 text-gray-400'>
          <input type="checkbox" value={'Kids'} onClick={toggleCategory}/>
          <div>
            kids
          </div>

          </div>
         
         
        </div>
      
        <div className={`flex flex-col pl-4 pt-2 pb-2 gap-2 w-[300px] border-[0.2px] ${hid?"hidden":""} border-gray-400 rounded-[5px] sm:block `}>
          <div className='text-[15px] pb-2  font-medium text-gray-600'>
            TYPE

          </div>
          <div  className='flex w-[20px] gap-3 text-gray-400'>
          <input type="checkbox" value={'Topwear'} onClick={toggleSubCategory}/>
          <div>
            Topwear
          </div>

          </div>
          <div className='flex w-[20px] gap-3 text-gray-400'>
          <input type="checkbox" value={'Bottomwear'} onClick={toggleSubCategory}/>
          <div>
            Bottomwear
          </div>

          </div>
          <div className='flex w-[20px] gap-3 text-gray-400'>
          <input type="checkbox" value={'Winterwear'} onClick={toggleSubCategory}/>
          <div>
            Winterwear
          </div>

          </div>
         
         
        </div>
      
      </div>
      <div  >
       <div className=' flex flex-col w-[100%] '>
        <div className='flex flex-col  w-[100%] items-center'>

        <div className='w-[1000px] flex justify-center items-center'>

        <Title t1="All" t2="COLLECTIONS"/>
        </div>
        <div className='pl-6 mt-4 w-[100%]'>

        <select name="" id="" className='text-sm text-gray-500 border-2 border-gray-300  w-[200px] '>
          <option value="relavant"  onClick={(e)=>{
            setSortby(e.target.value)
          }}>Sort by: Relevant</option>
          <option value="low-high" onClick={(e)=>{
            setSortby(e.target.value)
          }}>Sort by: Low to High</option>
          <option value="high-low" onClick={(e)=>{
            setSortby(e.target.value)
          }}>Sort by: High to Low</option>
        </select>
        </div>
        </div>
         
       <div className='grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4'>


       {
        product.map((items,index)=>{
          return (<ProductItem  key={index} id={items._id} name={items.name} price={items.price} image={items.image}/>)
         
          
          
        })
       }

       </div>
       </div>
     


      </div>

    </div>
  )
}
