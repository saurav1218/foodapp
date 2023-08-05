let express = require('express')
let mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

let foodDeliveryItems = require('./model/foodDelivery')
let cartItems = require('./model/cart')
let bookmarkItems = require('./model/bookmark')
let diningItems = require('./model/dining')
let nightLifeItems = require('./model/nightLife')

let app = express()
let port = process.env.PORT || 4000

// const dbURL = 'mongodb://localhost:27017/foodhub'

//middleware

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))

mongoose.connect("mongodb+srv://sauravmishra1218:Saurav0402@cluster0.5paypiz.mongodb.net/?retryWrites=true&w=majority/food").then(()=>{
console.log("database connected");
})

app.get("/foodhub",async(req,res)=>{
    try {
        let data = await foodDeliveryItems.find()
        res.json(data)
    } catch (error) {
        console.log(error);
    }
})


app.get("/dining",async(req,res)=>{
    try {
        let data = await diningItems.find()
        res.json(data)
    } catch (error) {
        console.log(error);
    }
})


app.get("/nightLife",async(req,res)=>{
    try {
        let data = await nightLifeItems.find()
        res.json(data)
    } catch (error) {
        console.log(error);
    }
})

app.post("/cart",(req,res)=>{
   cartItems.findOne({title:req.body.title}).then((doc)=>{
    if(doc){
        res.send({message:'already added'})
    }
    else{
        let data=new cartItems({
            qty:req.body.qty,
              type:req.body.type,
              img:req.body.img,
              title:req.body.title,
              rating:req.body.rating,
              amount:req.body.amount,
             description:req.body.description
                
            })
        data.save().then(()=>{
            res.send({message:'added to cart'})
        }).catch((err)=>{
            res.send({message:"successful"})
        })
    }
   })
   })

   app.get("/cart",async(req,res)=>{
    try {
        let data = await cartItems.find()
        res.json(data)
    } catch (error) {
        console.log(error);
    }
})


app.post("/bookmark",(req,res)=>{
    bookmarkItems.findOne({restaurant_title:req.body.restaurant_title}).then((doc)=>{
     if(doc){
         res.send({message:'already added'})
     }
     else{
         let data= new bookmarkItems({
              
               img:req.body.img,
               restaurant_title:req.body.restaurant_title,
              restaurant_address:req.body.restaurant_address,
              restaurant_timing:req.body.restaurant_timing,
              description:req.body.description,
               amount:req.body.amount,
              rating:req.body.rating
        
             })
         data.save().then(()=>{
             res.send({message:'added to bookmark'})
         }).catch((err)=>{
             res.send({message:"unsuccessful"})
         })
     }
    })
    })
 
    app.get("/bookmark",async(req,res)=>{
        try {
            let data = await bookmarkItems.find()
            res.json(data)
        } catch (error) {
            console.log(error);
        }
    })

//static files 
app.use(express.static(path.join(__dirname, "./frontend/build")))

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname, "./frontend/build/index.html"))
})

// if(process.env.NODE_ENV=='production'){
//     const path = requrie('path')

// app.get('/foodfactory',(req,res)=>{
//     app.use(express.static(path.resolve(__dirname,'frontend','build')))
//     res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
// })
// }

app.listen(port,()=>{
    console.log(`${port} port created`);
})