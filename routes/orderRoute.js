import { Router } from "express";

import {createOrder,getOrderById, updateOrderToPaid,updateOrderToDelivered} from "../controllers/orderController.js";

const orderRoute = Router();

orderRoute.route("/orders").post( createOrder)
orderRoute.route("/orders/:orderId").get( getOrderById);
orderRoute.route("/orders/:orderId/pay").put(updateOrderToPaid);
orderRoute.route("/orders/:orderId/deliver").put(updateOrderToDelivered);

export default orderRoute;
