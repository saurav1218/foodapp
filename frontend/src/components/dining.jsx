import "../style/dining.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"



const Dining = () => {

  let [dining, setDining] = useState([])
  let [domi_Dining,setDomi_Dining]=useState([])


  useEffect(() => {
    let fetchingDining = async () => {
      let initialDining = await axios.get("http://localhost:4000/dining")

      setDining(initialDining.data)
      setDomi_Dining(initialDining.data)

    }
    fetchingDining()
  },[])

  let low=()=>{
    let res=[...domi_Dining].sort((a,b)=>a.amount-b.amount)
    setDining(res) 
  }

  let high=()=>{
    let res=[...domi_Dining].sort((a,b)=>b.amount-a.amount)
    setDining(res)
  }

  let rate =()=>{
    let res=domi_Dining.filter((x)=>x.rating>"4.0")
    setDining(res)
  }
  return (
    <div className="dining">

      <div className="routingDining">

        <div className="route1Dining">

          <div className="iconDining">

          <Link to="/foodDelivery"> <img id="scooterDining" src="https://shorturl.at/wLWX6" alt="" height={50} width={50}/></Link> 
          <Link to="/foodDelivery">Delivery</Link>

      <Link to="/dining"><img id="tableDining" src="https://shorturl.at/jloBS" alt="" height={50} width={50}/></Link>
          <Link to="/dining">Dining Out</Link>

      <Link to="/nightlife"><img id="partyDining" src="https://shorturl.at/suwWY" alt="" height={50} width={50}/></Link>
          <Link to="/nightlife">Nightlife</Link>
          </div>

        </div>


        <div className="route2Dining">

        <div className="icon1Dining">
        <Link to="/foodapp"><img id="homeDining" src="https://shorturl.at/acSY3" alt="" height={50} width={50}/></Link>
        <Link to="/foodapp">Hungry Hub</Link>
        </div>
        
        </div>

      </div>



      <h2>Trending dining restaurants in Bengaluru</h2>
      <div className="filterDining">
        <button>Filter: </button>
        <button onClick={low}>Cost: Low to High</button>
        <button onClick={high}>Cost: High to Low</button>
        <button onClick={rate}>Rating : 4.0+</button>
      </div>

      {
        dining.map((data) => {

          return (
            <div className="fetchingDining">
              <img src={data.img} alt="" height={200} width={300} />

              <div className="fetch1Dining">
                <h3>{data.title}</h3>
                <Link to="/bookmark"> <h4 id="rating">{data.rating}&#9734; </h4></Link>
              </div>

              <div className="fetch2Dining">
                <h4 id="description">{data.description}</h4>
                <h4 id="amount">&#8377;{data.amount} for two</h4>
              </div>

              <div className="fetch3Dining">
                <h4 id="place">{data.place}</h4>
              </div>

              <div className="fetch4Dining">
                <h4>{data.distance}</h4>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Dining