import mongoose, { Schema } from "mongoose";

const reservation = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  people: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const ReservationModel = mongoose.model("reservation", reservation);

export default ReservationModel;
