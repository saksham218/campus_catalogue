const mongoose = require('mongoose');

const Customer_Schema = mongoose.Schema({
    basic_info: {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        roll: { type: Number, required: true, unique: true },
        img: { type: String, required: false},
        hostel: {
            type: String,
            enum: ['Kameng', 'Barak', 'Lohit', 'Brahma', 'Disang', 'Manas', 'Dihing', 'Umiam', 'Siang', 'Kapili', 'Dhansiri', 'Subhansiri']
        },
        mobile_number: { type: Number }
    },
    fav_shops: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Shop' }]
});

module.exports = mongoose.model('Customer', Customer_Schema);
