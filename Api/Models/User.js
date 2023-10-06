const mongoose = require('mongoose');


const SignupSchma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    picture: {
        type: String,
        default: "http://localhost:5000/Static/noPicture.png"
    }

}, { timestamps: true })


module.exports = mongoose.model('user', SignupSchma);

    