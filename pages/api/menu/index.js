import dbConnect from '../../../utils/dbConnect'
import Menu from '../../../models/menu'
import PickupLocation from '../../../models/pickupLocations'

dbConnect();

const menuRecords =  async (req, res) => {
    const { method } = req;
    switch(method) {
        case 'GET':
            try {
                const menu = await Menu.find({}).exec()                
                res.status(200).json({ success: true, data: menu})
            }
            catch (e) {
                res.status(400).json({success: false, error: e})
            }
            break;
        case 'POST':
            try {
                const { itemName, itemDescription, itemTraits  } = req.body
                const thisAppLocation = await PickupLocation.findOne({'name': process.env.APP_PICKUP_NAME}) 

                const menu = await Menu.create({ itemName, itemTraits, itemDescription, pickupLocation: thisAppLocation.id });
    
                res.status(201).json({ success: true, data: menu })
            } catch (e) {
                res.status(400).json({ success: false, error: e });
            }
            break;
        default: 
            res.status(400).json({success: false})
            break;
    }
};

export default menuRecords;
