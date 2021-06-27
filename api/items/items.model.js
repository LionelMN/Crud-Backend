const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({

    img : {
        type: String,
        default: 'default.png'
    },

    name : {
        type: String,
        required : true
    },

    last : {
        type: Number,
        default : 1
    },

    total : {
        type: Number,
        default : 1
    },

    genres : {
        type: Array,
    },

    sinopsis : {
        type: String,
    }



});

const itemModel = mongoose.model('item', itemSchema);

module.exports = itemModel;
