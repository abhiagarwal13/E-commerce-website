import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Collection from './pages/Collection';
import Login from './pages/Login';
import About from './pages/About';
import Cart from './pages/cart';
import Contact from './pages/Contact';
import Home from './pages/Home';
import PlaceOrder from './pages/PlaceOrder';
import Product from './pages/Product';
import Order from './pages/Order';
import Navbar from './Components/Navbar';
import { ShopContextProvider } from './Context/Shopcontext';
import Footer from './Components/Footer';
import Searchbar from './Components/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './Components/ScrollToTop';


const App = () => {
  return (
    <BrowserRouter >
    <ScrollToTop/>
  <ShopContextProvider>

    <div className=''>
      <ToastContainer/>
 
   <Navbar/>
   <Searchbar/>
 
   <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/Home' element={<Home/>}></Route>
     <Route path='/Collection' element={<Collection/>}> </Route>
     <Route path="/Contact" element={<Contact/>}/>
     <Route path="/Cart" element={<Cart/>}/>
     <Route path="/About" element={<About/>}/>
     <Route path="/Login" element={<Login/>}/>
     <Route path="/Product/:id" element={<Product/>}/>
     <Route path="/Orders" element={<Order/>}/>
     <Route path="/PlaceOrder" element={<PlaceOrder/>}/>
 
 
 
   </Routes>
   <Footer></Footer>
    </div>
   
  </ShopContextProvider>
  
   </BrowserRouter>
  
  )
}

export default App