let mongoose = require('mongoose')

let nightLifeSchema = new mongoose.Schema({
   

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
        type: Number,
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
        type: String,
        required: true
     },
    distance:{
        type: String,
        required: true
    }
    
})


module.exports = mongoose.model('nightLifeItems',nightLifeSchema)
