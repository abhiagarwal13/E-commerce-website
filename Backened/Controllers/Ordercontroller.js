import orderModel from '../Models/Ordermodel.js'
import userModel from '../Models/Usersmodel.js';
const placeOrder= async(req,res)=>{
   try {
     const {userId,items,amount,address}=req.body;
     const orderData={
         userId,
         items,
         amount,
         address,
         paymentMethod:"COD",
         payment:false,
         date:Date.now()
     }
     const newOrder= new orderModel(orderData);
     await newOrder.save();
     await userModel.findByIdAndUpdate(userId,{cartData:{}})
     res.json({
         success:true,
         message:"Order Placed"
     })
   } catch (error) {
    console.log(error.message)
    res.json({

        message:error.message,
        success:false,
    })
    
   }

}
const placeOrderStripe=async(req,res)=>{
      try {
     const {userId,items,amount,address}=req.body;
     const orderData={
         userId,
         items,
         amount,
         address,
         paymentMethod:"Stripe",
         payment:false,
         date:Date.now()
     }
     const newOrder= new orderModel(orderData);
     await newOrder.save();
     await userModel.findByIdAndUpdate(userId,{cartData:{}})
     res.json({
         success:true,
         message:"Order Placed"
     })
   } catch (error) {
    console.log(error.message)
    res.json({

        message:error.message,
        success:false,
    })
    
   }

}
const placeOrderRazorPay=async(req,res)=>{
      try {
     const {userId,items,amount,address}=req.body;
     const orderData={
         userId,
         items,
         amount,
         address,
         paymentMethod:"Razorpay",
         payment:false,
         date:Date.now()
     }
     const newOrder= new orderModel(orderData);
     await newOrder.save();
     await userModel.findByIdAndUpdate(userId,{cartData:{}})
     res.json({
         success:true,
         message:"Order Placed"
     })
   } catch (error) {
    console.log(error.message)
    res.json({

        message:error.message,
        success:false,
    })
    
   }

}
const allOrders=async(req,res)=>{
  try {
      const orders=await orderModel.find({})
      return res.json(
        {
            success:true,
           orders
        })

  } catch (error) {
    console.log(error)
    return res.json(
        {
            success:false,
            message:error.message
        }
    )
    
  }

}
const userOrders=async(req,res)=>{
    try {
        const {userId}=req.body
        const orders= await orderModel.find({userId})
        res.json({
            success:true,
            orders
        })
        
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:error.message
        })

        
    }

}
const updateStatus=async(req,res)=>{
    try {
        const {orderId, status} = req.body;
        // console.log(orderId,status)
        await orderModel.findByIdAndUpdate(orderId,{status})
        res.json({
            success:true,
            message:"Status Update"
        })
        
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:error.message,
        })
        
    }

}
export {userOrders,placeOrder,placeOrderRazorPay,placeOrderStripe,allOrders,updateStatus}