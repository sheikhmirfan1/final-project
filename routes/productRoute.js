import { Router } from "express"
import ProductModel from "../models/productModel.js"

const productRoute = Router()

productRoute.get("/products", async (req, res) => {
 
  try {
    const products = await ProductModel.find()  
    if (!products) {
      return res.status(500).json({ message: "No products found" })
    }
    res.status(200).json(products)
  }


  catch (err) {
    console.log("server error 🔴", err)
    res.status(500).json({ error : `${err.message} 🔴` })
  }

})

export default  productRoute