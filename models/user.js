import mongoose from "mongoose";

const userschema=new mongoose.Schema(
    {
        email:{
            type:String,
            unique:true,
            required:true,
        },
        firstname:{
            type:String,
            required:true,
        },
        lastname:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
        isAdmin:{
            type:Boolean,
            required:true,
            default:false,


        },
        isBlocked:{
            type:Boolean,
            required:true,
            default:false,
        },
        isEmailverified:{
            type:Boolean,
            required:true,
            default:false,
        },
        image:{
            type:String,
            required:true,
            default:"/images/default-profile.png",

        },
    
        




    }
)
const User=mongoose.model("User",userschema)

export default User;