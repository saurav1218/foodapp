let mongoose = require('mongoose')

let diningSchema = new mongoose.Schema({


    id:{
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
     rating:{
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
     place:{
        type: Number,
        required: true
     },
    distance:{
        type: String,
        required: true
    }
    
})


module.exports = mongoose.model('diningItems',diningSchema)
