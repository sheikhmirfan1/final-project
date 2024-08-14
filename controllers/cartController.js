import CartModel from "../models/cartModel.js";





const getAllCart = async (req, res) => {
    try {
        const carts = await CartModel.find();
        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json({
        message: error.message
        });
    }
    }

const addCart = async () => { 
    try {
        const cart = await CartModel.create(req.body);
        return res.status(201).json(cart);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    }

const updateCart = async () => {
    try {
        const cart = await CartModel.updateOne(req.body);
        return res.status(201).json(cart);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
    }

const deleteCart = async () => {
    try {
        const cart = await CartModel.deleteOne(req.body);
        return res.status(201).json(cart);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    }



export {getAllCart, addCart, updateCart, deleteCart};