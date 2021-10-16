const mongoose = require('mongoose')

const pickupLocationsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Add a pickup location Name'],
        trim: true,
        maxlength: [40, 'Pickup Location Name cannot be more than 40 characters']
    },
    address: {
        type: String,
        required: [true, 'Please Add a pickup location Address'],
        trim: true,
        maxlength: [300, 'Pickup Location Address cannot be more than 300 characters']
    },
    zip: {
        type: Number,
        required: [true, 'Please Add a pickup location Zipcode'],
        trim: true,
        maxlength: [6, 'Pickup Location Zip cannot be more than 6 digits']
    },
    menu: [{ 
          type: mongoose.Schema.Types.ObjectId, 
          ref:'Menu' 
        }]
})

module.exports = mongoose.models.PickupLocation || mongoose.model('PickupLocation', pickupLocationsSchema);