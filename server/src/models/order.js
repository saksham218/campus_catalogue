const mongoose = require('mongoose');

const Order_Schema = mongoose.Schema(
    {
        num: { type: String, required: true },
        uni_oid: { type: String, required: true },
        type: {
            type: String,
            enum: ['Product', 'Print', 'Service'],
            required: true
        },
        shop: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop', required: true },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer',
            required: true
        },
        total: { type: Number, required: true },
        items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
        status: {
            type: String,
            enum: ['Unplaced', 'Pending', 'Accepted', 'Ready', 'Rejected', 'Delivered', 'Cancelled'],
            default: 'Unplaced'
        },
        payment: { type: Object },
        print: [
            {
                layout: { type: String, enum: ['Landscape', 'Portrait'] },
                color: { type: String, enum: ['Color', 'Black & White'] },
                paper: { type: String, enum: ['A4', 'A3', 'A2', 'A1', 'A0'] },
                copies: { type: Number }
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('Order', Order_Schema);
