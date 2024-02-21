import { useEffect, useState } from "react";
import "../style/nightLife.css"
import { Link } from "react-router-dom";
import axios from "axios"



const Nightlife = () => {

    let [Life, setLife] = useState([])
    let [domi_life,setDomi_Life] = useState([])
    
    useEffect(() => {
        let fetchingNightOut = async () => {
            let initialNightOut = await axios.get("https://foodapp-oglx.onrender.com/nightLife")
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
 <marquee behavior="" direction="" scrollamount='10' id="marquee_fooddelivery">please wait!! fetching data will take sometime. </marquee>


            <div className="routingNightLife">

                <div className="route1NightLife">

               <div className="icon">

               <Link to="/foodDelivery"> <img id="scooter" src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp" alt="" height={50} width={50}/></Link> 
               <Link to="/foodDelivery">Delivery </Link>

            <Link to="/dining"><img id="table" src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp" alt="" height={50} width={50}/></Link>
               <Link to="/dining">Dining Out</Link>

               <Link to="/nightlife"><img id="party" src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp" alt="" height={50} width={50}/></Link>
                    <Link to="/nightlife">Nightlife</Link>
                  </div>
               
                 
                </div>


                <div className="route2NightLife">

                    <div className="icon1">
                <Link to="/"><img id="home" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzVTbP2MOnlVorqmilauHe7Ny1SB6stghfdlBPPqLTuRfh9UnS3FhAkkH9CcwK-yi6wz0&usqp=CAU" alt="" height={50} width={50}/></Link>
                    <Link to="/">Hungry Hub</Link>
                    </div>

                </div>

            </div>
            <h2>Nightlife Restaurants in Bengaluru</h2>
            <div className="filterNight">
                
                <button onClick={low}>Cost: Low to High</button>
                <button onClick={high}>Cost: High to Low</button>
                <button onClick={rate}>Rating : 4.0+</button>
            </div>
            {
                Life.map((data) => {
                    return (
                        <div className="fetchingNightLife">
                       <img id="nightlife_image" src={data.img} alt="" height={200} width={300} /> 

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