import Shop from '../models/shop.js';
import Item from '../models/item.js';

const firstDetails = (req, res) => {
    let { name, owner_name, email, phone, lat, lon, open, close, category, payment } = req.body;
    /*
        payment: {
            vpa :["vpa1","vpa2"],
            bank :[{
                "accno": "1234567890",
                "ifsc": "ABC1234567",
                "acc_holder_name": "ABC",
            }],
    */
    const shop = Shop.findOne({ email: email });
    if (shop) {
        res.status(400).json({ message: 'Shop already exists' });
    } else {
        const shop = new Shop({
            basic_info: {
                name: name,
                owner_name: owner_name,
                email: email,
                phone: phone,
                map_coordinates: {
                    lat: lat,
                    lon: lon
                },
                default_timings: {
                    open: open,
                    close: close
                },
                category: category,
                payment: payment
            }
        });
        shop.save()
            .then((result) => {
                res.status(200).json({ message: 'Shop created successfully' });
            })
            .catch((error) => {
                res.status(500).json({ message: 'Error creating shop' });
            });
    }
};

const secondDetails = (req, res) => {
    const shop = req.shop;
    const { name, owner_name, phone, lat, lon, open, close, image } = req.body;
    Shop.findByIdAndUpdate(shop._id, {
        basic_info: {
            name: name || shop.basic_info.name,
            owner_name: owner_name || shop.basic_info.owner_name,
            phone: phone || shop.basic_info.phone,
            map_coordinates: {
                lat: lat || shop.basic_info.map_coordinates.lat,
                lon: lon || shop.basic_info.map_coordinates.lon
            },
            default_timings: {
                open: open || shop.basic_info.default_timings.open,
                close: close || shop.basic_info.default_timings.close
            },
            image: image || shop.basic_info.image
        }
    })
        .then((result) => {
            res.status(200).json({ message: 'Shop updated successfully', shop: result });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error updating shop' });
        });
};

const getMenu = (req, res) => {
    const items = Item.find({ shop: req.shop._id });
    res.status(200).json({ message: 'Items fetched successfully', items: items });
};

const getShop = (req, res) => {
    const shop = Shop.findById(req.shop._id).populate('menu').populate('approved.approver');
    res.status(200).json({ message: 'Shop fetched successfully', shop: shop });
};

module.exports = {
    firstDetails,
    secondDetails,
    getMenu,
    getShop
};
