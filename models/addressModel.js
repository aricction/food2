const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'shippingAdd'
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
        
    },

    address: {
        type: String,
        required: true
    },

    postalcode: {
        type: String,
        required: true
    },

    town: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('userAddress', addressSchema);