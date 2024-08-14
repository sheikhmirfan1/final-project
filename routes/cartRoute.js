import { Router } from "express";
import {
  getAllCart,
  addCart,
  updateCart,
  deleteCart,
} from "../controllers/cartController.js";



const cartRouter = Router();

cartRouter.get("/carts",getAllCart);
cartRouter.post("/carts",addCart);
cartRouter.put("/carts",updateCart);
cartRouter.delete("/carts",deleteCart);

export default cartRouter;

