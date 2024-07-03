import { Schema } from "mongoose"

const product = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },

    description :{
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    })

    const productModel = mongoose.model('product', product)

    export default productModel