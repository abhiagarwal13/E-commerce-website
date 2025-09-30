import jwt from "jsonwebtoken"
const adminAuth=(req,res,next)=>{
    try {
        const {token}=req.headers;
        // console.log(req.headers,req.header)
        if(!token){
            return res.json({
                success:false,
                message:"token missing in header"
            })
     }
        
        const jwtToken=jwt.verify(token,process.env.JWT_SECRET)
        // console.log(jwtToken,"jwtToken")ls
        if(jwtToken.id!=process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
           return res.json({
               success:false,
               message:"not"
           })

        }
        else{

            next()

        }
    } catch (error) {
        console.log(error)
        return res.json({
            success:false,
            message:error.message
        })
        
    }


}

export default adminAuth;