import {Router} from "express"
import { register,login,logout, sendVerifyOtp,verifyEmail, isAuthenticated ,sendResetOTP, resetPassword} from "../controllers/auth.controller.js";
import userAuth from "../middlewares/auth.middleware.js";

const auth = Router();

auth.post('/register',register);
auth.post('/login',login);
auth.post('/logout',logout);
auth.post('/send-verify-otp',userAuth,sendVerifyOtp);
auth.post('/verify-email',userAuth,verifyEmail);
auth.post('/is-auth',userAuth,isAuthenticated);
auth.post('/send-reset-otp',sendResetOTP);
auth.post('/reset-password',resetPassword)
export default auth;