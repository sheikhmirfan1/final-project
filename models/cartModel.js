import mongoose, {Schema} from "mongoose";


const cart = new Schema({
    product:{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity:{
        type: Number,
        required: true,
        min:[1,'Quantity can not be less than 1.']
    },
    price: {
        type: Number,
        required: true
    },

    });


    


    const CartModel = mongoose.model('Cart', cart);
    export default CartModel;