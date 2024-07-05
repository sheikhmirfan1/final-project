import { Schema } from "mongoose";

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
})

const UserModel = mongoose.model('user', user)

export default UserModel