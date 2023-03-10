const mongoose = require('mongoose');

const Customer_Schema = mongoose.Schema({
    basic_info: {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        roll: { type: Number, required: true, unique: true },
        img: { type: String, required: false, default: '' },
        hostel: {
            type: String,
            enum: ['Kameng', 'Barak', 'Lohit', 'Brahma', 'Disang', 'Manas', 'Dihing', 'Umiam', 'Siang', 'Kapili', 'Dhansiri', 'Subhansiri'],
            default: 'Disang'
        },
        mobile_number: { type: Number, default: 0 }
    },
    fav_shops: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Shop' }]
});

module.exports = mongoose.model('Customer', Customer_Schema);
