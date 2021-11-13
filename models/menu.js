const mongoose = require('mongoose')

const MenuSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: [true, 'Please Add a Menu Item Name'],
        trim: true,
        maxlength: [40, 'Menu Item Name cannot be more than 40 characters']
    },
    itemTraits: {
        type: Map,
        of: String
    },
    itemDescription: {
        type: String,
        trim: true,
        maxlength: [300, 'Menu Item Description cannot be more than 300 characters']
    },
    addToCartState: {
        type: Boolean,
        required: [true, 'addToCartState required field']
    },
    // Pickup Location will be fetched from apps env variable APP_PICKUP_NAME
    pickupLocation: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please Add a Pickup Location for this Menu Item'],
        ref: 'PickupLocation'
    }
})

module.exports = mongoose.models.Menu ||  mongoose.model('Menu',MenuSchema);