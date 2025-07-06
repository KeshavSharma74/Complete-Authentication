import jwt from "jsonwebtoken"
import "dotenv/config"

const userAuth = async(req,res,next)=>{
    const {token}=req.cookies;
    
    // console.log("token bta rha hu : ",token);

    if(!token){
        return res.json({
            success:false,
            message:"bhai middleware mei hi dikkat agyi .Not Authorized.Login Again"
        })
    }

    try{

        const decodedToken = jwt.verify(token,process.env.JWT_SECRET);

        if(!decodedToken.id){
            return res.json({
                success:false,
                message:"User do not have token.Login Again"
            })
        }

        if(!req.body){
            req.body={};
        }

        req.body.userId=decodedToken.id;
        next();
    }
    catch(error){

        console.log(error.message);
        return res.json({
            sucess:false,
            message:error.message,
        })

    }

}

export default userAuth;