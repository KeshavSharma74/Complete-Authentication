import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";
import "dotenv/config"
import transporter from "../config/nodemailer.js";

const register = async(req,res) =>{
    
    const {name,email,password}=req.body;

    if(!name || !email || !password){
        return res.json({
            success:false,
            message:"name, email and password should be present."
        })
    }

    try{
        const hashedPassword=await bcrypt.hash(password,10);

        const user=new User({
            name,
            email,
            password:hashedPassword});

        await user.save();

        const token = jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:"7d"}
    )

    res.cookie('token',token,{
        httpOnly:true,
        secure:process.env.NODE_ENV==="production",
        sameSite: (process.env.NODE_ENV)==="production"?"none":"strict",
        maxAge:7*24*60*60*1000
    });

        console.log("Preparing to send welcome email to:", email);
        await transporter.sendMail({
        from: process.env.SENDER_MAIL,
        to: email,
        subject: "Welcome to my Website",
        text: `Welcome to website! Your account has been created with email id: ${email}`,
        });
    
    return res.json({
        success:true,
        message:"User registered successfully",
        user:{
            id:user._id,
            name:user.name,
            email:user.email,
        },
        token
    })

    }
    catch(error){
        console.log(error.message);
        res.json({
            success:false,
            message:error.message,
        })
    }

}

const login = async(req,res)=>{

    const {email,password}=req.body;
    
    if(!email || !password){
        return res.json({
            success:false,
            message:"Email and Password both should be present"
        })
    }

    try{

        const user=await User.findOne({email});

        if(!user){
            return res.json({
                success:false,
                message:"Email is not registered"
            })
        }

        const isMatch=await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.json({
                success:false,
                message:"Password is not correct"
            })
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.cookie('token',token,{
            httpOnly:true,
            secure:process.env.NODE_ENV==="production",
            sameSite: (process.env.NODE_ENV)==="production"?"none":"strict",
            maxAge:7*24*60*60*1000
        });
    


        return res.json({
            success:true,
            message:"User login successfully",
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
            },
            token
        })


    }
    catch(error){
        console.log(error.message);
        return res.json({
            success:false,
            message:error.message,
        })
    }
}

const logout = (req,res) =>{
    try{

        res.clearCookie('token',{
            httpOnly:true,
            secure:process.env.NODE_ENV==="production",
            sameSite: (process.env.NODE_ENV)==="production"?"none":"strict",
        })

        res.json({
            success:true,
            message:"User logged out successfully"
        })
    }
    catch(error){
        console.log(error.message);
        return res.json({
            success:false,
            message:error.message,
        })
    }
}

export {
    register,
    login,
    logout,
}