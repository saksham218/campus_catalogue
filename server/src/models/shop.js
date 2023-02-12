const mongoose = require('mongoose');

const Shop_Schema = mongoose.Schema(
    {
        basic_info: {
            name: { type: String, required: true },
            owner_name: { type: String, required: true },
            email: { type: String, required: true, unique: true },
            phone: { type: Number, required: true, unique: true },
            address: { type: String, required: true },
            gstin: { type: String, required: true, unique: true },
            map_coordinates: {
                lat: { type: String },
                lon: { type: String }
            },
            default_timings: {
                open: { type: Date, required: true },
                close: { type: Date, required: true }
            },
            image: { type: String }, //TODO: check encoding
            category: {
                type: String,
                enum: ['Canteen', 'Restaurant', 'Juice Center', 'Stationary', 'Rental', 'Bakery', 'Other']
            }
        },
        payment: {
            vpa: [
                {
                    id: { type: String, default: null },
                    is_default: { type: Boolean, default: false },
                    fund_account_id: { type: String, default: '' }
                }
            ],
            bank_account: [
                {
                    accno: { type: String, default: null },
                    ifsc: { type: String, default: null },
                    acc_holder_name: { type: String, default: null },
                    is_default: { type: Boolean, default: false },
                    fund_account_id: { type: String, default: '' }
                }
            ]
        },
        razorpay: {
            customer_id: { type: String, default: '' },
            default_fund_account: {
                id: { type: String, default: '' },
                mode: { type: String, default: '' }
            }
        },
        approved: {
            status: { type: Boolean, default: false },
            approver: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin', default: null },
            date: { type: Date, default: null }
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('Shop', Shop_Schema);
