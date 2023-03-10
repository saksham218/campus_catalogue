const mongoose = require('mongoose');

const Order_Schema = mongoose.Schema(
    {
        num: { type: String, required: true },
        otp: { type: Number },
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
        total: { type: Number, required: true, default: 0 },
        items: [{item:{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' },quantity: { type: Number, required: true, default: 1  }}],
        status: {
            type: String,
            enum: ['Unplaced', 'Pending', 'Accepted', 'Ready', 'Rejected', 'Delivered', 'Cancelled'],
            default: 'Unplaced'
        },
        payment: {
            razorpay_payment_id: { type: String },
            razorpay_order_id: { type: String },
            razorpay_signature: { type: String },
            refund: { type: Object }
        },
        print: [
            {
                layout: { type: String, enum: ['Landscape', 'Portrait'] },
                color: { type: Boolean },
                paper: { type: String, enum: ['A4', 'A3', 'A2', 'A1', 'A0'] },
                copies: { type: Number },
                mimetype: { type: String },
                path: { type: String }
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('Order', Order_Schema);
