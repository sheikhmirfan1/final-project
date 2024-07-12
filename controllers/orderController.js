import  OrderModel  from "../models/orderModel.js"
import mongoose from "mongoose"

const getOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find();
    if (orders.length < 1) {
      return res.status(500).json({ message: "No orders found" });
    }
    res.status(200).json(orders);
  } catch (err) {
    console.log("server error 🔴", err);
    res.status(500).json({ error: `${err.message} 🔴` });
  }
};

const createOrder = async (req, res) => {
  const { name, price, userId, status, productId, quantity } = req.body;
  try {
    const newOrder = await OrderModel.create({
      name,
      price,
      userId,
      status,
      productId,
      quantity,
    });
    return res.status(201).json(newOrder);
  } catch (err) {
    console.log("server error 🔴", err);
    res.status(500).json({ error: `${err.message} 🔴` });
  }
};

const getOrderById = async (req, res) => {
  const { orderId } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      return res.status(400).json({ error: "Order not found" });
    }
    const order = await OrderModel.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res.status(200).json(order);
  } catch (err) {
    console.log("server error 🔴", err);
    res.status(500).json({ error: `${err.message} 🔴` });
  }
};

const updateOrderToPaid = async (req, res) => {
  const { orderId } = req.params;
  try {
    const order = await Order;
    Model.findByIdAndUpdate(orderId, { status: "paid" }, { new: true });
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res.status(200).json(order);
  } catch (err) {
    console.log("server error 🔴", err);
    res.status(500).json({ error: `${err.message} 🔴` });
  }
};

const updateOrderToDelivered = async (req, res) => {
  const { orderId } = req.params;
  try {
    const order = await OrderModel.findByIdAndUpdate(
      orderId,
      { status: "delivered" },
      { new: true }
    );
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res.status(200).json(order);
  } catch (err) {
    console.log("server error 🔴", err);
    res.status(500).json({ error: `${err.message} 🔴` });
  }
};

export {
  createOrder,
  getOrderById,
  getOrders,
  updateOrderToPaid,
  updateOrderToDelivered,
};
