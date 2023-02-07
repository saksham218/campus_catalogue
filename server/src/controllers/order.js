const Order = require('../models/order');

const getOrder = async (req, res) => {
    const { id } = req.params.id
    try {
        const order = await Order.findById();
        console.log(order);
        res.status(200).json(order);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const getShop = async (req,res) => {
    const { id } = req.params.id
    try {
        const order = await Order.findById();
        console.log(order);
        res.status(200).json(order.shop);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const getUser = async (req, res) => {
    const { id } = req.params.id
    try {
        const order = await Order.findById();
        console.log(order);
        res.status(200).json(order.user);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};


const getItems = async (req, res) => {
    const { id } = req.params.id;

    try{
        const items = Order.find({customer : id});
        console.log(items);
        res.status(200).json({data : items});
    }
    catch(error){
        res.status(404).json({message : error.message});
    }
};





