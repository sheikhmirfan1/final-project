import CartModel from "../models/CartModel.js";





const getAllCart = async (req, res) => {
    try {
        const carts = await CartModel.find(req.params.cart);
        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json({
        message: error.message
        });
    }
    }

const addCart = async (req,res) => { 
    const {products} = req.body
    console.log(req.body);
    try {
        const createCart = await CartModel ({
            
            product: products.productId,
            quantity: products.quantity,
            price: products.price,
            
        });
        await createCart.save(req.body);
        return res.status(201).json(createCart);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

    

const updateCart = async (req,res) => {
     
    try {
        const cart = await CartModel.updateOne(req.body);

        await CartModel. UpdateCart(req.body);
        
        return res.status(201).json(cart);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
    }

const deleteCart = async (req,res) => {
    try {
        const cart = await CartModel.deleteOne(req.body);
        return res.status(201).json(cart);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    }



export {getAllCart, addCart, updateCart, deleteCart};