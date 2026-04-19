import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const connectDB = async () => {
    try {
const  connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`)
console.error(`\n MONGO DB CONNECT !!" , ${connectionInstance}`);

    } catch (error) {
        console.error("MONGO DB CONNECTION FAILED !!" ,error);
        
    }
}

export default connectDB