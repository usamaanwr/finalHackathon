import dotenv from "dotenv"
dotenv.config();
import connectDB from "./db/index.js";
import app from "./app.js";

const port = process.env.PORT

connectDB()

.then(()=>{
    app.listen(port ,()=>{
        console.log(`server is starting running :${port}`);
    })
})
.catch((err)=>{
    console.log("MONGO DB CONNECTION FAILED !!! " , err);
    
})
