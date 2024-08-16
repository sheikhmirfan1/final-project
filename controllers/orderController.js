import OrderModel from "../models/orderModel.js"
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
  console.log(req.body)
  const {products, address} = req.body
  try {
    const newOrder = await OrderModel({
      name: address.name,
      location: address.location,
      phone: address.phone,
      products: products.map(product => ({
        product: product._id,
        quantity: product.quantity,
        price: product.price
      })),
      totalPrice: products.reduce((acc, item) => acc + (item.quantity * item.price), 0)

    });
    newOrder.save()
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
