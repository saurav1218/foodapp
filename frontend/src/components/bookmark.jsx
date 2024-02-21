import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../style/bookmark.css"

import axios from "axios";


const BookMark = () => {

    let params = useParams()



    let [bookmark, setBookmark] = useState([])

    useEffect(() => {
        let fetchningFirst = async () => {
            let fetchPart1 = await axios.get('https://foodapp-oglx.onrender.com/bookmark')
            setBookmark(fetchPart1.data)
        }
        fetchningFirst()
    }, [])

    
  

  let remove=(id)=>{
     let response= bookmark.filter((x)=>x._id != id)

     setBookmark(response)
  }

    return (

        <div className="foodDelivery">

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
    
        <h2 id="bookmark_page">BookMark</h2>

        <div className="bookmarkProductItems">
    
            {
                bookmark.map((val) => {
                    // if (val.id == params.id) {
                        return (
                            <div className="newDataBookmark">
       


                                <div className="bake1ProductBookmark">
                                    <img id="imgBookmark" src={val.img} alt="" x />
              {/* <Link to={`/foodDelivery/${val.id}`}><img id="image" src={val.img} alt=""/></Link> */}

                                </div>

                              <div className="bake2ProductBookmark">
                                <h3>{val.restaurant_title}</h3>
                                <h4 id="ratingBookmark">{val.rating}&#9734;</h4>
                                </div>

                               <div className="bake3ProductBookmark">
                                <p id="descBookmark">{val.description}</p>
                                <h3 id="amountBookmark">&#8377;{val.amount} for two</h3>
                                </div>

                               <div className="bake4ProductBookmark">
                                {/* <p id="place">{val.restaurant_address}</p> */}
                                <p id="timeBookmark">{val.restaurant_timing}</p>
                                <button onClick={()=>remove(val._id)}>Remove Bookmark</button>
                                </div>
 
                    
                            </div>
                        )
                    // }
                })
            }
        </div>
</div>
    )

}

export default BookMark;
