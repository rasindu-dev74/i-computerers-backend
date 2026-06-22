import express from "express"
import mongoose from"mongoose"
import userRouter from "./routes/userRouter.js"

import jwt from "jsonwebtoken";
import authenticateuser from "./middlewares/aurthanticate.js"
import productRouter from "./routes/productRouter.js"
import dotenv from "dotenv"
dotenv.config()

const mongouri=process.env.MONGO_URI

mongoose.connect(mongouri).then(
    ()=>{
        console.log("connected to mongodb")
    }
)

let app=express()
app.use(express.json())


app.use(authenticateuser)


app.use("/User",userRouter)


app.use("/product",productRouter)


    

function go(){
    console.log("server is run")

}
app.listen(3000,go)