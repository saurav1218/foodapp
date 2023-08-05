let mongoose = require('mongoose')

let foodSchema = new mongoose.Schema({
     img:{
        type: String,
        required: true
     },
     title:{
        type: String,
        required: true
     },
     description:{
        type: String,
        required: true
     },
     amount:{
        type: Number,
        required: true
     },
    type:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('foodDeliveryItems',foodSchema)