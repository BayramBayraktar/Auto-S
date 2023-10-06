const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const PostCar = new mongoose.Schema({
    postedBy: {
        type: ObjectId,
        ref: "User"
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    km: {
        type: String,
        required: true
    },
    firstRegistration: {
        type: String,
        required: true
    },
    photos: [{
        type: String,
        required: true
    }],
    Descraption: [{
        Getriebe: {
            type: String
        },
        Komfort: {
            type: String
        },
        Sicht: {
            type: String
        },
        Sicherheit: {
            type: String
        },
        Entertainment: {
            type: String
        },
        PostedByDescraption: {
            type: String
        }
    }]

}, { timestamps: true })


module.exports = mongoose.model('PostCar', PostCar)