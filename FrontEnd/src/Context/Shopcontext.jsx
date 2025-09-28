import React, { useEffect } from 'react'
import { createContext ,useState} from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const backendUrl=import.meta.env.VITE_BACKEND_URL
const shopContext=createContext();

function ShopContextProvider({children}) {
  const [Search, setSearch] = useState("")
  const [showSearch, setshowSearch] = useState(false)
  const [cartItems, setcartItems] = useState({})
  const [noOfItems, setnoOfItems] = useState(0)
  const [products, setproducts] = useState([])
  const [token,settoken]=useState('')
  const navigate= useNavigate()
  const getUserCart=async (token)=>{
    try {
      const response= await axios.post(backendUrl+"/api/cart/get",{},{headers:{token}})
      if(response.data.success){
        // console.log("cartdata ",response.data.cartData)
        setcartItems(response.data.cartData)

      }
      else{
        console.log("unable to fetch")

      }
      
    } catch (error) {
       console.log(error)
        toast.error(error.message)
      
    }

  }
  const updateQuantity =async (id,size,quantity)=>{
    // console.log(id,size,quantity)
    let  cartData=structuredClone(cartItems);
    cartData[id][size]=quantity;
    setcartItems(cartData);
    if(token){
      try {
        await axios.post(backendUrl+"/api/cart/update",{itemId:id,size,quantity},{headers:{token}})

      } catch (error) {
        console.log(error)
        toast.error(error.message)
        
      }
    }

  }
  const addtoCart=async (itemId,Size)=>{
    if(!Size){
      toast.error('Select Product Size');
      return;
    }
    // console.log(itemId,Size)
    let cart=structuredClone(cartItems);
    if(cart[itemId]){
      if(cart[itemId][Size]){
        cart[itemId][Size]+=1

      }
      else{
        cart[itemId][Size]=1
      }


    }
    else{
      cart[itemId]={}
      cart[itemId][Size]=1
    }
    setcartItems(cart);
    if(token){
      try {
        await axios.post(backendUrl+"/api/cart/add",{itemId,Size},{headers:{token}})
        toast.success("Item added to cart")
        
      } catch (error) {
        console.log(error.message)
        
      }
    }
    
   
  }
  const getCartItemsCount=()=>{
    let totalCount=0;
    for(const items in cartItems){
      // console.log(items)
      for(const sizes in cartItems[items]){
        // console.log(sizes)
        try {
          if(cartItems[items][sizes]>0){
            totalCount+=cartItems[items][sizes];
          }
          
        } catch (error) {
          // console.log(error.message)
          
        }
      }
    }
   return totalCount

  }
   const getCartTotal=()=>{
    let total=0;
    // console.log(cartItems)
    for(const Items in cartItems){
      const Item=products.find((item)=>{
        return item._id==Items;
      })
      // console.log(Item)
      for(const size in cartItems[Items]){
        total+=cartItems[Items][size]*Item.price;
      }
    }
    return total;
  
  }
  const getProductdata= async()=>{
    try {
      const response= await axios.get(backendUrl+'/api/product/list')
      // console.log(response.data.products)
      if(response.data.success){
        setproducts(response.data.products);

      }
      else{
        toast.error(response.data.message)
      }
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
      
    }
  }
  useEffect(()=>{
    getProductdata()

  },[])
  useEffect(()=>{
    if(!token && localStorage.getItem('token')){
      // console.log("token in local")
      settoken(localStorage.getItem('token'))
      getUserCart(localStorage.getItem('token'))
    }

  },[])
  useEffect(()=>{
    if(token){
    
      getUserCart(localStorage.getItem('token'))
    }

  },[token])

  // useEffect(()=>{
  //   console.log(cartItems)

  // },[cartItems])
    const val={products,currency:"$",delivery_fee:10,
      showSearch,Search,setSearch,setshowSearch,addtoCart,getCartItemsCount,setnoOfItems,noOfItems,cartItems,
      updateQuantity,getCartTotal,navigate,backendUrl,token,settoken,setcartItems,

    }

    

    return (
   <shopContext.Provider value={val}> 
   {children}
   </shopContext.Provider>
  )
}

export {ShopContextProvider,shopContext}