import { User } from "../models/user.model.js";

const getUserData=async(req,res)=>{
    try{

        const {userId} = req.body;

        if(!userId){
            return res.json({
                success:false,
                message:"Invalid user.Login again"
            })
        }

        const user=await User.findById(userId);

        if(!user){
            return res.json({
                success:false,
                message:"Invalid User.Login again",
            })
        }

        return res.json({
            success:true,
            userData:{
                name:user.name,
                isAccountVerified:user.isAccountVerified,
            },
            message:"User details fetched successfully"
        })

    }
    catch(error){
        return res.json({
            success:false,
            message:error.message,
        })
    }
}

export {getUserData}