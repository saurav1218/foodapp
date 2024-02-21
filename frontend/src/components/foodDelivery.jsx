import { useEffect, useRef, useState } from "react"
import "../style/foodDelivery.css"
import { Link } from "react-router-dom"
import "../style/bookmark.css"
import axios from "axios"

const FoodDelivery = () => {
  let [food, setFood] = useState([])
  let [domi,setDom]=useState([])
  let [bookmark,setBookmark] = useState([])
  
  let bm=useRef("")
  let bm1=useRef("")

useEffect(()=>{
  let fetchingFoodData = async () => {
    let res = await axios.get('https://foodapp-oglx.onrender.com/foodhub')
    setFood(res.data)
    setDom(res.data)
  }
  fetchingFoodData()
},[])

  let low=()=>{
    let res=[...domi].sort((a,b)=>a.amount-b.amount)
    setFood(res) 
  }

  let high=()=>{
    let res=[...domi].sort((a,b)=>b.amount-a.amount)
    setFood(res)
  }

  let rate =()=>{
    let res=domi.filter((x)=>x.rating>"4.0")
    setFood(res)
  }
             
  if(bm.current.innerText>0){
    bm.current.style.display="inline-block"
    bm1.current.style.backgroundColor="red"
  }
  
 
    //fetching bookmark json here

    useEffect(()=>{
      let fetchingBookmark = async()=>{
         let initialBookmark = await axios.get("https://foodapp-oglx.onrender.com/bookmark")
         setBookmark(initialBookmark.data)
      }
      fetchingBookmark()
  })

  let submit = ( img1,restaurant_title1,restaurant_address1,restaurant_timing1, description1, amount1,rating1) => {
     
    axios.post('https://foodapp-oglx.onrender.com/bookmark', {img:img1,restaurant_title:restaurant_title1,restaurant_address:restaurant_address1, restaurant_timing:restaurant_timing1, description:description1, amount:amount1,rating:rating1}).then((res) => {
       alert(res.data.message)
    })
 }
        
   
     
  
  return (

    <div className="foodDelivery">
 <marquee behavior="" direction="" scrollamount='10' id="marquee_fooddelivery">please wait!! fetching data will take sometime. </marquee>
      <div className="routingFoodDelivery">

        <div className="route1FoodDelivery">

          <div className="iconFood">

          <Link to="/foodDelivery"> <img id="scooterFood" src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp" alt="" height={50} width={50}/></Link> 
      <Link to="/foodDelivery">Delivery</Link>

      <Link to="/dining"><img id="tableFood" src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp" alt="" height={50} width={50}/></Link>
      <Link to="/dining">Dining Out</Link>

      <Link to="/nightlife"><img id="partyFood" src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp" alt="" height={50} width={50}/></Link>
      <Link to="/nightlife">Nightlife</Link>
      </div>

      </div>

      <div className="route2FoodDelivery">

        <div className="icon1Food">
        <Link to='/'><img id="homeFood" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzVTbP2MOnlVorqmilauHe7Ny1SB6stghfdlBPPqLTuRfh9UnS3FhAkkH9CcwK-yi6wz0&usqp=CAU" alt="" height={50} width={50}/></Link>
        <Link to="/">Hungry Hub</Link>
        </div>

      </div>

      </div>

      <h2>Delivery Restaurants in Bengaluru</h2>

      <div className="filterDemo">
        <button onClick={low}>Cost: Low to High</button>
        <button onClick={high}>Cost: High to Low</button>
        <button onClick={rate}>Rating : 4.0+</button>
        <Link to="/bookmark"><button id="bookmark" ref={bm1}>BookMark&#9734;<sup ref={bm} id="supBookmark">{bookmark.length}</sup></button> </Link>
      </div>

      {
        food.map((data) => {
          return (

            <div className="fetching">
              <Link to={`/foodDelivery/${data.id}`}><img id="image" src={data.img} alt="" height={200} width={300} /></Link>

              <div className="fetch1">
                <h3>{data.restaurant_title}</h3>
             
            <h4 id="rating">{data.rating}&#9734; </h4>
            
              </div>

              <div className="fetch2">
                <h4 id="description">{data.description}</h4>
                <h4 id="amountFood">&#8377;{data.amount} for two</h4>
              </div>

              <div className="fetch3">        
              <button id="cart" onClick={()=>submit(data.img,data.restaurant_title,data.restaurant_address,data.restaurant_timing, data.description, data.amount,data.rating)}>Add To bookmark</button>
              <h4>{data.time}</h4>

              </div>

            </div>


          )
        })
      }
    </div>
  )
}

export default FoodDelivery