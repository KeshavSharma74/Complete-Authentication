import express from "express"
import "dotenv/config"
import cors from 'cors'
import cookieParser from "cookie-parser";
import connectDb from "./config/database.js";
import auth from "./routes/auth.route.js";
import user from "./routes/user.route.js";

connectDb();

const app=express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:5173",
    credentials:true,
}))

const port=process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.send("App is live");
})

app.use("/api/v1/auth",auth);
app.use("/api/v1/user",user)

app.listen(port,()=>{
    console.log(`App is listening at ${port}`);
})
