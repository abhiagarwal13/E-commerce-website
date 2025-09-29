
import {  cloudinary } from "../config/Cloudinary.js";
import productModel from "../Models/Productmodel.js";
const addProducts=async (req,res)=>{
   try {
     const {name,description,price,category,subCategory,sizes,bestSeller}=req.body;
     console.log(req.body)
     const image1=req.files.image1 && req.files.image1[0]; 
     const image2=req.files.image2 && req.files.image2[0];
     const image3=req.files.image3 && req.files.image3[0];
     const image4=req.files.image4 && req.files.image4[0];
     const image=[image1,image2,image3,image4].filter((items)=>{
        return items;
     });
     let imageUrl= await Promise.all(
        
        image.map(async (items) => {
            // console.log(items)
            let result= await cloudinary.uploader.upload(items.path,{resource_type:'image'});
            return result.secure_url


        })
      )
      const productData={
       name,
       description,
       category,
       price:Number(price),
       subCategory,
       bestSeller:bestSeller==="true"?true:false,
  sizes: Array.isArray(sizes) ? sizes : JSON.parse(sizes), 
       date:Date.now(),
       image:imageUrl
      }
      console.log(productData)
      const product=new productModel(productData);
      await product.save()
    //  console.log("URL GENERATED")
   //   console.log(imageUrl)
     return res.json({success:true,message:"product added"})
   } catch (error) {
    console.log(error);
    return res.json({
        success:false,
        message:error.message
    })
    
   }

}
const listProducts=async(req,res)=>{
  
  try {
    const products= await productModel.find({});
    // console.log(products)
    return res.json({success:true,products})
  
 } catch (error) {
   console.log(error);
  return  res.json({success:false, message:error.message})
   
 }
}
const removeProduct=async (req,res)=>{
  try {
   const product= await productModel.findByIdAndDelete(req.body.id);

    return res.json({
      success:true,
      message:"Product Deleted",
    }

    )
  } catch (error) {
   console.log(error);
   return res.json({
      success:false,
      message:error.message,
   })
   
  }

}
const singleProduct=async(req,res)=>{
  try {
    const {productId}=req.body;
    const product=await productModel.findById(productId);
    return res.json({
       success:true,
       product
 
    })
 
  } catch (error) {
   console.log(error);
   res.json({
      success:false,
      message:error.message,
   })
   
  }
}

export {addProducts,removeProduct,listProducts,singleProduct}