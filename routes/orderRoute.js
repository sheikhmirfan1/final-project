import { Router } from "express";

import {createOrder,getOrderById, getOrders, updateOrderToPaid,updateOrderToDelivered} from "../controllers/orderController.js";

const orderRoute = Router();

orderRoute.route("/orders").post( createOrder)
orderRoute.route("/:orderId").get( getOrderById);
orderRoute.route("/:orderId/pay").put( updateOrderToPaid);
orderRoute
  .route("/:orderId/deliver")
  .put(updateOrderToDelivered);

export default orderRoute;
