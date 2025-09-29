import mongoose from "mongoose";
const connectDB=async ()=>{
    await mongoose.connect(`${process.env.MONGODB_URL}Ecommerse`)
    .then(()=>{
        console.log("MONGODB CONNECTED")
    })
    .catch((err)=>{
        console.log("UNAPLE TO CONNEECT ",err)
    })
    
}
export default connectDB