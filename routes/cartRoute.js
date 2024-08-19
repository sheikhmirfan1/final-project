import { Router } from "express";
import {
  getAllCart,
  addCart,
  updateCart,
  deleteCart,
getCartById,
} from "../controllers/cartController.js";



const cartRouter = Router();

cartRouter.get("/carts",getAllCart);
cartRouter.post("/carts",addCart);
cartRouter.put("/carts",updateCart);
cartRouter.delete("/carts",deleteCart);
cartRouter.get("/carts/:id",getCartById);

export default cartRouter;

