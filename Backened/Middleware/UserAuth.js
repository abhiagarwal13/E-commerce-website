import jwt from 'jsonwebtoken'
const authUser= async(req,res,next)=>{
    const {token}=req.headers;
    if(!token){
        return res.json({
            success:false,
            message:'Token not present for authorization'
        })


    }
   try {
     const jwt_decoded_token=jwt.verify(token,process.env.JWT_SECRET)
     req.body.userId=jwt_decoded_token.id;
     next()

 
   
   } catch (error) {
    console.log(error.message)
    return res.json({
        success:false,
        message:error.message
    })
    
   }

}
export default authUser