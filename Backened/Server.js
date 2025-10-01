import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./config/Mongodb.js"
import {connectCloudinary} from "./config/Cloudinary.js"
import userRoute from "./Routes/Userroute.js"
import asyncHandler from 'express-async-handler';
import productRouter  from "./Routes/Productrouter.js"
import cartRoutes from "./Routes/Cartroute.js"
import orderRouter from "./Routes/Orderrouter.js"
const app=express()
const port=process.env.PORT||4000
connectDB()

connectCloudinary()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("working in /")
})
app.listen(port,()=>{
    console.log("LIstening in port")
})
app.use('/api/user',userRoute)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRoutes)
app.use('/api/order',orderRouter)