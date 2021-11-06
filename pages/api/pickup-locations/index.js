import dbConnect from '../../../utils/dbConnect'
import PickupLocation from '../../../models/pickupLocations'

dbConnect();

const pickupRecords =  async (req, res) => {
    const { method } = req;
 
    switch(method) {
        case 'GET':
            try {
                const pickupLocations = await PickupLocation.findOne({'name': process.env.APP_PICKUP_NAME})   
                res.status(200).json({ success: true, data: pickupLocations, pickupname_passed: process.env.APP_PICKUP_NAME})
            }
            catch (e) {
                res.status(400).json({success: false, pickupname_passed: process.env.APP_PICKUP_NAME})
            }
            break;
        case 'POST':
            try {
                const pickupLocations = await PickupLocation.create(req.body);
    
                res.status(201).json({ success: true, data: pickupLocations })
            } catch (error) {
                res.status(400).json({ success: false, error: error });
            }
            break;            
        default: 
            res.status(400).json({success: false})
            break;
    }
};

export default pickupRecords;