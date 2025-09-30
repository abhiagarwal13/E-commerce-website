import mongoose from "mongoose";
const ProductSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        required:true,

    },
    image:{
        type:[String],
        required:true,

    },
    price:{
        type:Number,
        required:true,

    },
    category:{
        type:String,
        required:true,

    },
    subCategory:{
        type:String,
        required:true,

    },
    sizes:{
        type:[String],
        required:true,
    },
    bestSeller:{
        type:Boolean,
        default:false,
        

    },
    date:{
        type:Number,
     
    }

    
})
const productModel= mongoose.models.product || mongoose.model('product',ProductSchema);
export default productModel;
