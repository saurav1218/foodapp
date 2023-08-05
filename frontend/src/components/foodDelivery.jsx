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
    let res = await axios.get('http://localhost:4000/foodhub')
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
         let initialBookmark = await axios.get("http://localhost:4000/bookmark")
         setBookmark(initialBookmark.data)
      }
      fetchingBookmark()
  })

  let submit = ( img1,restaurant_title1,restaurant_address1,restaurant_timing1, description1, amount1,rating1) => {
     
    axios.post('http://localhost:4000/bookmark', {img:img1,restaurant_title:restaurant_title1,restaurant_address:restaurant_address1, restaurant_timing:restaurant_timing1, description:description1, amount:amount1,rating:rating1}).then((res) => {
       alert(res.data.message)
    })
 }
        
     
  
  return (
    <div className="foodDelivery">

      <div className="routingFoodDelivery">

        <div className="route1FoodDelivery">

          <div className="iconFood">

          <Link to="/foodDelivery"> <img id="scooterFood" src="https://shorturl.at/wLWX6" alt="" height={50} width={50}/></Link> 
      <Link to="/foodDelivery">Delivery</Link>

      <Link to="/dining"><img id="tableFood" src="https://shorturl.at/jloBS" alt="" height={50} width={50}/></Link>
      <Link to="/dining">Dining Out</Link>

      <Link to="/nightlife"><img id="partyFood" src="https://shorturl.at/suwWY" alt="" height={50} width={50}/></Link>
      <Link to="/nightlife">Nightlife</Link>
      </div>

      </div>

      <div className="route2FoodDelivery">

        <div className="icon1Food">
        <Link to='/foodapp'><img id="homeFood" src="https://shorturl.at/acSY3" alt="" height={50} width={50}/></Link>
        <Link to="/foodapp">Hungry Hub</Link>
        </div>

      </div>

      </div>

      <h2>Delivery Restaurants in Bengaluru</h2>

      <div className="filterDemo">
        <button>Filter: </button>
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