import CartModel from "../models/cartModel.js";


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

const addCart = async (req, res) => {
    const { products } = req.body
    console.log(req.body);
    try {
        const createCart = await CartModel({
            name: req.body.name,
            location: req.body.location,
            phone: req.body.phone,
            products: products.map(product => ({
                product: product.product,
                quantity: product.quantity,
                price: product.price
            })),
            totalPrice: products.reduce((acc, item) => acc + (item.quantity * item.price), 0)

        });
        await createCart.save(req.body);
        return res.status(201).json(createCart);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}



const updateCart = async (req, res) => {

    try {
        const cart = await CartModel.updateOne(req.body);

        await CartModel.UpdateCart(req.body);

        return res.status(201).json(cart);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
const getCartById = async (req, res) => {
    try {
        const cart = await CartModel.findById(req.params.id);
        return res.status(200).json(cart);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const deleteCart = async (req, res) => {
    try {
        const cart = await CartModel.deleteOne(req.body);
        return res.status(201).json(cart);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}





export { getAllCart, addCart, updateCart, deleteCart ,getCartById};