import { Router } from "express";
import {
  getProducts,
  createProduct,
  getProductById,
  deleteProduct,
} from "../controllers/productController.js";

import verifyToken from "../middleware/verify.js";

const productRoute = Router();

productRoute.get("/products", getProducts);

productRoute.post("/products", verifyToken, createProduct);

productRoute.post("/products/:productId", getProductById);

productRoute.delete("/products/:productId", deleteProduct);

export default productRoute;
