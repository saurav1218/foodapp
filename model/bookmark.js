let mongoose = require('mongoose')

let bookmarkSchema = new mongoose.Schema({
   
    img:{
        type: String,
        required: true
     },
     restaurant_title:{
        type: String,
        required: true
     },
     restaurant_address:{
        type: String,
        required: true
     },
     restaurant_timing:{
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
     rating:{
        type: String,
        required: true
     }
})

module.exports = mongoose.model('bookmarkItems',bookmarkSchema)
