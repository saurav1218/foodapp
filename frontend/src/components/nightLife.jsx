import { useEffect, useState } from "react";
import "../style/nightLife.css"
import { Link } from "react-router-dom";
import axios from "axios"



const Nightlife = () => {

    let [Life, setLife] = useState([])
    let [domi_life,setDomi_Life] = useState([])
    
    useEffect(() => {
        let fetchingNightOut = async () => {
            let initialNightOut = await axios.get("http://localhost:4000/nightLife")
            setLife(initialNightOut.data)
            setDomi_Life(initialNightOut.data)
        }
        fetchingNightOut()
    },[])
     
    let low=()=>{
        let res=[...domi_life].sort((a,b)=>a.amount-b.amount)
        setLife(res) 
      }
    
      let high=()=>{
        let res=[...domi_life].sort((a,b)=>b.amount-a.amount)
        setLife(res)
      }
    
      let rate =()=>{
        let res=domi_life.filter((x)=>x.rating>"4.0")
        setLife(res)
      }
    return (
        <div className="nightlife">

            <div className="routingNightLife">

                <div className="route1NightLife">

               <div className="icon">

               <Link to="/foodDelivery"> <img id="scooter" src="https://shorturl.at/wLWX6" alt="" height={50} width={50}/></Link> 
               <Link to="/foodDelivery">Delivery </Link>

            <Link to="/dining"><img id="table" src="https://shorturl.at/jloBS" alt="" height={50} width={50}/></Link>
               <Link to="/dining">Dining Out</Link>

               <Link to="/nightlife"><img id="party" src="https://shorturl.at/suwWY" alt="" height={50} width={50}/></Link>
                    <Link to="/nightlife">Nightlife</Link>
                  </div>
               
                 
                </div>


                <div className="route2NightLife">

                    <div className="icon1">
                <Link to="/"><img id="home" src="https://shorturl.at/acSY3" alt="" height={50} width={50}/></Link>
                    <Link to="/">Hungry Hub</Link>
                    </div>

                </div>

            </div>
            <h2>Nightlife Restaurants in Bengaluru</h2>
            <div className="filterNight">
                <button>Filter: </button>
                <button onClick={low}>Cost: Low to High</button>
                <button onClick={high}>Cost: High to Low</button>
                <button onClick={rate}>Rating : 4.0+</button>
            </div>
            {
                Life.map((data) => {
                    return (
                        <div className="fetchingNightLife">
                        <Link to="/brahmaBrews"><img  src={data.img} alt="" height={200} width={300} /></Link>  

                            <div className="fetch1Night">
                                <h3>{data.title}</h3>
                                <Link to="/bookmark"> <h4 id="rating">{data.rating}&#9734; </h4></Link>
                            </div>

                            <div className="fetch2Night">
                                <h4 id="description">{data.description}</h4>
                                <h4 id="amount">&#8377;{data.amount} for two</h4>
                            </div>

                            <div className="fetch3Night">
                                <h4>{data.place}</h4>
                            </div>

                            <div className="fetch4Night">
                                <h4>{data.distance}</h4>
                            </div>
                        </div>
                    )
                })
            }
          
        </div>
    )
}
export default Nightlife;