import {Router} from "express"
import { register,login,logout } from "../controllers/auth.controller.js";

const auth = Router();

auth.post('/register',register);
auth.post('/login',login);
auth.post('/logout',logout);

export default auth;