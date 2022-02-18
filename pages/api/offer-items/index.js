import dbConnect from '../../../utils/dbConnect'
import OfferItem from '../../../models/offerItems'
dbConnect();


const offerItemsRecords = async (req, res) => {
    const { method } = req;

    switch(method) {
        case 'GET':
            try {                
                const offerItems = await OfferItem.find({}).exec()
                res.status(200).json({ success: true, data: offerItems })
            } catch (e) {
                res.status(400).json({success: false, error: e})
            }
            break;
        default:
            res.status(400).json({success: false})
            break;     
    }
};

export default offerItemsRecords;