import Product from "../models/product.js"
import { isAdmin } from "./usercontroller.js";


export async function createproduct(req,res){
    try{
        if(isAdmin(req)){ 
            const product1= new Product(req.body);
            await product1.save();
            res.json({massege:"product save succsefully"});


        }else{
            res.status(403).json({massege:"you need loging as and adming can create product"})
            return
        }

    }catch(error){
        console.error("error creating user:",error)
        return res.status(500).json({massage:"internal server error"})

    }
}

export async function getallproduct(req,res){
    try{
        if(isAdmin(req)){
            const product=await Product.find();
            res.json(product);
        }else{
            const product=await Product.find({isAvailable:true})
            res.json(product);

        }

    }catch(error){
         console.error("error creating user:",error)
        return res.status(500).json({massage:"internal server error"})

    }
}

export async function deleteproduct(req,res){
    try{

        const productId=req.params.productId
        if(isAdmin(req)){
            const product=await Product.findOne({productId:productId})
            if(product==null){
                res.status(400).json({massage:"product dose noye exite"});
                return
            }
            await Product.findOneAndDelete({productId:productId})
            res.status(500).json({massage:"product delete succeesfully"});

        }else{
            res.status(403).json({massege:"you need to loging as and adming to delet products"})
        }


    }catch(error){
        console.error("error creating user:",error)
        return res.status(500).json({massage:"internal server error"})

    }
}

export async function upadateproduct(req,res){
    try{
        const productId=req.params.ProductId
        if(isAdmin(req)){
            const product=await Product.findOne({productId:productId})

            if(product==null){
                res.status(404).json({massage:"product does note exit"})
                return
            }

            await Product.findOneAndUpdate({productId:productId},req.body)
            res.json({massage:"product updated successfully"})
        }else{
            res.status(403).json({massage:"you nedd to login and admin can upadate product"})
            return
        }

    }catch(error){
        console.error("error creating user:",error)
        return res.status(500).json({massage:"internal server error"})
    }

}

export async function getProductbyId(req,res){
    try{

        const productId=req.params.productId

        const product=await Product.findOne({productId:productId})

        if(product==null){
            res.status(404).json({massage:"product dose not exist"});
            return
        }
        if(product.isAvailable){
            res.json(product);


        }else{
            if(isAdmin(req)){
                res.json(product);
            }else{
                res.status(404).json({massage:"product dose not exist"});
                return
                
            }
        }

    }catch(error){
        console.error("error creating user:",error)
        return res.status(500).json({massage:"internal server error"})
        
    }

    
}