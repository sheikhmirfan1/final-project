import mongoose, { Schema } from 'mongoose'

const orderSchema = new Schema({
  products: [{
    product: {
      type: Schema.Types.ObjectId,
      ref: 'product',
      required: true
    },
    quantity: {
      type: Number,
      required: true

    },
    price: {
      type: Number,
      required: true
    }
  }],

  status: {
    type: String,
    enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Pending'
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },

  totalPrice: {
    type: Number,
    required: true
  }

})
const Order = mongoose.model('Order', orderSchema)
export default Order