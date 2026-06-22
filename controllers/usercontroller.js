
import User from "../models/user.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()

export async function createUser(req,res){
    try{


        const password1=req.body.password

        const passwordHash=bcrypt.hashSync(password1,10)


        const user1= new User(
            {
                email:req.body.email,
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                password:passwordHash
            
            }
        );
        await user1.save();
        res.json({massage:"user created successfully"})

    }catch(error){
        console.error("error creating user:",error)
        return res.json({massage:"internal server error"})
    }
}

export async function loginUser(req,res){
    try{

        const email1=req.body.email;
        const password=req.body.password;

        const user=await User.findOne({email:email1});
        

        if(user==null){
            res.status(404).json({massege:"user does note exit"});
            return
            


        }
        const ispasswordmatching=bcrypt.compareSync(password,user.password);

        if(ispasswordmatching){
            

            const userinfo={
                email:user.email,
                firstname:user.firstname,
                lastname:user.lastname,
                image:user.image,
                emailverified:user.isEmailverified,
                isAdmin:user.isAdmin,
                isBlocked:user.isBlocked,
            }

            const token= Jwt.sign(userinfo,process.env.jwt_secret)
            res.json({token:token})

        }
        else{
            res.status(401).json({massege:"invalid password"})
        }




    }catch(error){
        console.error("error creating user:",error)
        return res.status(500).json({massage:"internal server error"})

    }
}

export function isAdmin(req){
    if(req.user==null){
        return false
    }
    
    if(!req.user.isAdmin){
        return false
    }
    return true
}