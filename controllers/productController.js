import ProductModel from "../models/productModel.js"

const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find()
    if (products.length<1){
      return res.status(500).json({ message: "No products found" })
    }
    res.status(200).json(products)


  } catch (err) {
    console.log("server error 🔴", err)
    res.status(500).json({ error: `${err.message} 🔴` })
  }
}

export {getProducts}