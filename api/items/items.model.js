const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({

    img : {
        type: String,
        required : true
    },

    name : {
        type: String,
        required : true
    },

    last : {
        type: Number,
        required : true
    },

    total : {
        type: Number,
        required : true
    }

});

const itemModel = mongoose.model('item', itemSchema);

module.exports = itemModel;
