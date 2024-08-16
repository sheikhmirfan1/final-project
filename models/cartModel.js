import mongoose, { Schema } from "mongoose";


const CartProductSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, "Quantity can not be less then 1"],
  },
  price: {
    type: Number,
    required: true,
  },
});


const CartSchema = new Schema({
  products: [CartProductSchema],
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
});
const CartModel = mongoose.model("Cart", CartSchema);
export default CartModel;