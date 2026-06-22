import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export default function authenticateuser(
    req,res,next){

        const header=req.header("Authorization")

        if(header !=null){
            const token=header.replace("Bearer ", "")

            jwt.verify(token ,process.env.jwt_secret,
                (err,decoded)=>{

                    if(decoded==null){
                        res.status(401).json({massege:"unuthorize"})

                    }else{
                        req.user=decoded
                        next()
                    }
                }
            )
        }else{
            next()
        }


      

    }
