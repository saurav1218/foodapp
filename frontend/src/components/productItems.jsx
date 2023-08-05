import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "../style/productItems.css"
import axios from "axios";

const ProductItems = () => {

   let params = useParams()

   let [gg, setG] = useState([])

   let [domi, setDomi] = useState([])

   let [cart, setCart] = useState([])

   let [upperItems, setUpperItems] = useState([])

   let cart1 = useRef("")
   let cart2 = useRef("")
   let addToCart = useRef("")



   useEffect(() => {
      let fetchingFoodData = async () => {
         let res = await axios.get('https://foodapp-oglx.onrender.com/foodhub')
      
         setUpperItems(res.data)

         res.data.filter((x) => {
            if (x.id == params.id) {
               setG(x.data)
               setDomi(x.data)
            }
         })

      }
      fetchingFoodData()
   }, [])









   let veges = () => {
       let res = domi.filter((x) => x.type == "veg")
         setG(res)
      


   }


   let nonveges = () => {
      let res = domi.filter((x) => x.type == "nonveg")
       setG(res)
      
   }

   let all = () => {
       setG(domi)

   }
   // img:req.body.img,
   // restaurant_title:req.body.restaurant_title,
   // rating:req.body.rating,
   // amount:req.body.amount,
//   description:req.body.description,
//   restaurant_address:req.body.restaurant_address,
//   restaurant_timing:req.body.restaurant_timing


   let submit = (title1, img1, description1, amount1,type1,qty1, rating1) => {
     
      axios.post('https://foodapp-oglx.onrender.com/cart', {  title: title1, img: img1, description: description1, amount: amount1, type:type1,qty:qty1,rating: rating1 }).then((res) => {
         alert(res.data.message)
      })
   }


   if (cart1.current.innerText > 0) {
      cart1.current.style.display = "inline-block"
      cart1.current.style.color = "black"
      cart2.current.style.color = "Red"
   }

   useEffect(() => {
      let fetchningFirst = async () => {
         let fetchPart1 = await axios.get('https://foodapp-oglx.onrender.com/cart')
         setCart(fetchPart1.data)
      }
      fetchningFirst()
   })


   return (
      <div className="productItems">

         <div className="routingFoodDelivery">


            <div className="route1FoodDelivery">

               <div className="iconFood">
                  <Link to="/foodDelivery"> <img id="scooterFood" src="https://shorturl.at/wLWX6" alt="" height={50} width={50} /></Link>
                  <Link to="/foodDelivery">Delivery</Link>

                  <Link to="/dining"><img id="tableFood" src="https://shorturl.at/jloBS" alt="" height={50} width={50} /></Link>
                  <Link to="/dining">Dining Out</Link>

                  <Link to="/nightlife"><img id="partyFood" src="https://shorturl.at/suwWY" alt="" height={50} width={50} /></Link>
                  <Link to="/nightlife">Nightlife</Link>
               </div>

            </div>



            <div className="route2FoodDelivery">

               <div className="icon1Food">
                  <Link to='/'><img id="homeFood" src="https://shorturl.at/acSY3" alt="" height={50} width={50} /></Link>
                  <Link to="/">Hungry Hub</Link>
               </div>

            </div>

         </div>

         <div className="mainProductItems">

            {
               upperItems.map((val) => {
                  if (val.id == params.id) {
                     return (
                        <div className="newData">
                           < div className="bakeProduct">

                              <div className="bake1Product">
                                 <img src={val.img1} alt="" x />

                              </div>

                              <div className="bake2Product">
                                 <img src={val.img2} alt="" height={206} width={440} />
                                 <img src={val.img3} alt="" height={206} width={440} />

                              </div>

                           </div>

                           <h1>{val.restaurant_title}</h1>

                           <p id="desc">{val.description}</p>
                           <p id="place">{val.restaurant_address}</p>
                           <p id="time">{val.restaurant_timing}</p>


                           <div className="bake3Product">

                              <h1>Order Online</h1>
                              <input type="text" placeholder="Search within menu" />

                              <div className="cart">
                                 <img id="cartImg" src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt="" height={30} />
                                 <Link to="/cart">   <p ref={cart2}>Cart <sup id="supCard" ref={cart1}>{cart.length}</sup></p></Link>
                              </div>

                           </div>

                           <div className="bake4Product">
                              <label htmlFor="" id="veg" ><input type="radio" name="food" value="veg" onClick={veges} />Veg</label>
                              <label htmlFor="" id="nonVeg" ><input type="radio" name="food" value="nonveg" onClick={nonveges} />Non Veg</label>
                              <label htmlFor="" id="all" ><input type="radio" name="food" value="all" onClick={all} />All</label>

                           </div>
                        </div>
                     )
                  }
               })
            }


             {
                             gg.map((x) => {
                                 
                                 return (
                                    <div className="restaurant">

                                       <div className="fetchTheRestaurant">
                                          <img src={x.img} alt="" />
                                       </div>

                                       <div className="fetchTheRestaurant1">

                                          <h3>{x.title}</h3>

                                          <div className="fetchTheRestaurant2">
                                             <p id="thePizzaAmt">&#8377;{x.amount} for two</p>
                                             <p id="thePizzaRating">{x.rating}&#9734;</p>
                                          </div>

                                          <p id="thePizzaDec">{x.description}</p>
                           <button id="cart" ref={addToCart} onClick={() => submit(x.title,x.img,x.description,x.amount,x.type,x.qty,x.rating)}>Add To Cart</button>

                        </div>

                     </div>

                                          )
               })
             }
         </div>

      </div>

   );
}

export default ProductItems;