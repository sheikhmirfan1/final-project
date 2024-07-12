import { Schema } from "mongoose"
import mongoose from "mongoose"


const order = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  productId: [
    {
      type: Schema.Types.ObjectId,
      ref: "product",
      required: true,
    }],
  quantity: {
    type: Number,
    required: true,
  },
});

const OrderModel = mongoose.model('order', order)

export default OrderModel