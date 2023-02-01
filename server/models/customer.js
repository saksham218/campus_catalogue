import mongoose from "mongoose";

const Customer_Schema = mongoose.Schema({
    basic_info: {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        roll: { type: Number, required: true, unique: true },
        hostel: { type: String, enum: [''] },// TODO: Add hostels
    },
    cart: [
        { type: mongoose.Schema.Types.ObjectId, ref: "" } // TODO Add model name
    ],
    fav_shops: [
        { type: mongoose.Schema.Types.ObjectId, ref: "" } // TODO Add model name
    ]
});

export default mongoose.model("Customer", Customer_Schema);