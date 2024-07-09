import { Router } from "express"
import {getProducts, createProduct,getProductById,deleteProduct} from "../controllers/productController.js";

const productRoute = Router()

productRoute.get("/products", getProducts)
productRoute.post("/products", createProduct)
productRoute.get("/products/:productId", getProductById)
productRoute.delete("/products/:productId", deleteProduct)


export default  productRoute