import mongoose, { model } from "mongoose";

const productSchema=new mongoose.Schema({
    productId:{
        type:String,
        unique:true,
        required:true
    },
    name:{
        type:String,
        unique:true
    },
    altname:{
        type:[String],
        default:[]
    },
    description:{
        type:String,
        required:true,
    },
    images:{
        type:[String],
        default:[]
    },
    price:{
        type:Number,
        required:true,

    },
    labelledprice:{
        type:Number,
        default:0,
    },
    stock:{
        type:Number,
        default:0,
    },
    isAvailable:{
        type:Boolean,
        default:true,
    },
    category:{
        type:String
    },
    brand:{
        type:String
    },
    model :{
        type:String
    }
    
})

const Product=mongoose.model("Product",productSchema)
export default Product
