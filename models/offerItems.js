const mongoose = require('mongoose')

const offerItemsSchema = new mongoose.Schema({
    cupsLeft: {
        type: Number,
        required: [false, 'cups left error'],
        trim: true,
        maxlength: [4, 'too many cups left']
    }
})

module.exports = mongoose.models.OfferItem || mongoose.model('OfferItem', offerItemsSchema);