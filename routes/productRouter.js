import express from "express";
import { createproduct, getProductbyId} from "../controllers/productcontroller.js";
import { getallproduct } from "../controllers/productcontroller.js";
import { deleteproduct} from "../controllers/productcontroller.js";
import Product from "../models/product.js";
import  {upadateproduct}  from "../controllers/productcontroller.js";

const productRouter=express.Router()

productRouter.post("/",createproduct)
productRouter.get("/",getallproduct)
productRouter.delete("/:productId",deleteproduct)
productRouter.put("/:ProductId",upadateproduct)
productRouter.get("/:productId",getProductbyId)

export default productRouter