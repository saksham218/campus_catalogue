import mongoose from "mongoose";

const Admin_Schema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }

});

export default mongoose.model("Admin", Admin_Schema);