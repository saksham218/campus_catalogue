const mongoose = require('mongoose');

const Item_Schema = mongoose.Schema(
    {
        name: { type: String, required: true },
        shop: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop', required: true },
        image: { type: String }, //TODO: check encoding
        price: { type: Number, required: true },
        category: {
            type: String,
            enum: ['Product', 'Meal', 'Service', 'Print'],
            required: true
        },
        available: { type: Boolean, default: true }
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model('Item', Item_Schema);
