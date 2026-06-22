import express from "express"
import mongoose from"mongoose"
import userRouter from "./routes/userRouter.js"
import studentRouter from "./routes/studentRouter.js"
import jwt from "jsonwebtoken";
import authenticateuser from "./middlewares/aurthanticate.js"
import productRouter from "./routes/productRouter.js"

const mongouri="mongodb://admin:1234@ac-rlejqje-shard-00-00.thgeeik.mongodb.net:27017,ac-rlejqje-shard-00-01.thgeeik.mongodb.net:27017,ac-rlejqje-shard-00-02.thgeeik.mongodb.net:27017/?ssl=true&replicaSet=atlas-xltpzj-shard-0&authSource=admin&appName=Cluster0"

mongoose.connect(mongouri).then(
    ()=>{
        console.log("connected to mongodb")
    }
)

let app=express()
app.use(express.json())


app.use(authenticateuser)


app.use("/User",userRouter)

app.use("/student",studentRouter)
app.use("/product",productRouter)


    

function go(){
    console.log("server is run")

}
app.listen(3000,go)