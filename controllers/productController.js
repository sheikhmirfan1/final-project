import ProductModel from "../models/productModel.js";

const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    if (products.length < 1) {
      return res.status(500).json({ message: "No products found" });
    }
    res.status(200).json(products);
  } catch (err) {
    console.log("server error 🔴", err);
    res.status(500).json({ error: `${err.message} 🔴` });
  }
};

const createProduct = async (req, res) => {
  const { name, description, price, image, category, quantity } = req.body;
  try {
    const newProduct = await ProductModel.create({
      name,
      description,
      price,
      image,
      category,
      quantity,
    });
    return res.status(201).json(newProduct);
  } catch (err) {
    console.log("server error 🔴", err);
    res.status(500).json({ error: `${err.message} 🔴` });
  }
};

const getProductById = async (req, res) => {
  const { productId } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ error: "Product not found" });
    }
    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json(product);
  } catch (err) {
    console.log("server error 🔴", err);
    res.status(500).json({ error: `${err.message} 🔴` });
  }
};

const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    await ProductModel.findByIdAndDelete(productId);
    return res.status(200).json(deleteProduct);
  } 
  
  catch (err) {
    console.log("server error 🔴", err);
    res.status(500).json({ error: `${err.message} 🔴` });
  }
};

export { getProducts, createProduct, getProductById, deleteProduct };
