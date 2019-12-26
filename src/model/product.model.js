const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema ({
    name:{
        type: String,
        required: true
    },
    productCode: {
        type: String,
        required: false
    },
    volume: {
        type: String,
        required: false
    },
    price:{
        type: String,
        required: true
    },

    category:{
        type: String,
        required: true
    },
    picture:{
        type: String
    },
    description:{
        type: String
    },
    keyboardName:{
        type: String
    }


})
mongoose.model('myproducts', ProductSchema)