import asyncHandler from 'express-async-handler';
import userModel from '../Models/Usersmodel.js';
import validator from "validator";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'})

}


const loginUser= async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await userModel.findOne({email});
        if(!user){
             return res.json({
                success:false,
                message:"Email doesn't exist",
            })
        }
        const isUser= await bcrypt.compare(password,user.password);
        if(isUser){
            const token=createToken(user._id);
           return res.json(
                {
                    success:true,
                    token,
                     message:"logged In"
                }
            )
    
    
        }
        else{
            return res.json(
                {
                    success:false,
                    message:"Incorrect Password"
                }
            )
        }
    } catch (error) {
        console.log("error Occured",error);
            return res.json({success:false,message:error.message})

        
    }

}

const registerUser= async(req,res)=>{
    
 try {
       const {name,email,password}=req.body;
       const exist=await userModel.findOne({email})
       if(exist){
       return res.json({
            success:false,
            message:"User already exist",
        })
       }
       if(!validator.isEmail(email)){
          return res.json({
            success:false,
            message:"Enter Valid Email",
        })

       }
       if(password.length<8){
          return res.json({
            success:false,
            message:"Please Choose a Strong Password",
        })
       }
       const hashedPassword= await bcrypt.hash(password,10);
       const newUser=new userModel({name,email,password:hashedPassword});
       const user=await newUser.save();
       const token=createToken(user._id)
     return  res.json({
        success:true,
        token,
        message:"User added"
       })

      
 } catch (error) {
    // console.log(error);
    return res.json({success:false,message:error.message})
    
 }
    

}

const adminLogin=async(req,res)=>{

    try {
        const {email,password}=req.body;
        
        if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
            const token=createToken(email+password);

           return res.json({
            success:true,
            token

            })
        }
        else{
            return res.json({
                success:false,
                message:"Invalid Credential",
            })

        }
        
    } catch (error) {
         return res.json({success:false,message:error.message})
        
    }

}

export {loginUser,registerUser,adminLogin}
