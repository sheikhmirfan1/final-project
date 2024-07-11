import { Router } from "express";

import {createOrder,getOrderById, getOrders, updateOrderToPaid,updateOrderToDelivered} from "../controllers/orderController.js";

const orderRoute = Router();

orderRoute.route("/").post(protect, createOrder).get(protect, admin, getOrders);
orderRoute.route("/:orderId").get(protect, getOrderById);
orderRoute.route("/:orderId/pay").put(protect, updateOrderToPaid);
orderRoute
  .route("/:orderId/deliver")
  .put(protect, admin, updateOrderToDelivered);

export default orderRoute;
