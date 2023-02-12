const mongoose = require('mongoose');

const Admin_Schema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true, select: false }
    },
    { timestamps: true, versionKey: false }
);

module.exports = mongoose.model('Admin', Admin_Schema);
