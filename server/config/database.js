import "dotenv/config"
import mongoose from "mongoose"

const connectDb = async() =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`);
        console.log("Database Connected Successfully..!!!\nHost : " + connectionInstance.connection.host);
    }
    catch(error){
        console.log("Database Connection Failed..!!!");
        console.log(error.message);
        process.exit(1);
    }
}

export default connectDb