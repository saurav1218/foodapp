let mongoose = require('mongoose')

let cartSchema = new mongoose.Schema({
   
    
    qty:{
        type: Number,
        required: true 
    },
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
     rating:{
        type: Number,
        required: true
     },
    type:{
        type: String,
        required: true
    }
    
})


module.exports = mongoose.model('cartItems',cartSchema)
