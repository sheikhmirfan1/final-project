import mongoose, { Schema } from "mongoose";

const reservation = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    people: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
});

export default mongoose.model("reservation", reservation);