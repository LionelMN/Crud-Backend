const itemModel = require('./items.model');

module.exports = {
    getAll,
    getOne,
    createOne,
    removeOne,
    putOne,
};

async function getAll(req, res){
    try {
        const items = await itemModel.find();
        return res.json(items);
    } catch (errors) {
        return res.status(500).json(errors)
    };
};

async function getOne(req, res){
    try {
        const { name } = req.params;
        const item = await itemModel.find({name : name});
        return res.json(item);
    } catch (errors) {
        return res.status(500).json(errors)
    };
};

async function createOne(req, res){
    try {
        const newItem = await itemModel.create(req.body);
        console.log(req.file)
        return res.json(newItem);
    } catch (errors) {
        return res.status(500).json(errors)
    };
};

async function removeOne(req, res){
    try {
        const { id } = req.params;
        const item = await itemModel.find({_id : id}).deleteOne();
        return res.json(`Item deleted correctly`);
    } catch (errors) {
        return res.status(500).json(errors)
    };
};

async function putOne(req, res){
    try {
        const { id } = req.params;
        const item = await itemModel.find({_id : id}).updateOne(req.body);
        return res.json(item);
    } catch (errors) {
        return res.status(500).json(errors)
    };
};
