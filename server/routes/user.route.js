import {Router} from "express"
import userAuth from "../middlewares/auth.middleware.js";
import { getUserData } from "../controllers/user.controller.js";

const user=Router();

user.get('/data',userAuth,getUserData);

export default user;