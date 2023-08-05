import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import "../style/bookmark.css"

import axios from "axios";


const BookMark = () => {

    let params = useParams()

    let [bookmark, setBookmark] = useState([])

    useEffect(() => {
        let fetchningFirst = async () => {
            let fetchPart1 = await axios.get('http://localhost:4000/bookmark')
            setBookmark(fetchPart1.data)
        }
        fetchningFirst()
    }, [])

  let remove=(id)=>{
     let response= bookmark.filter((x)=>x._id != id)

     setBookmark(response)
  }

    return (
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

    )

}

export default BookMark;
