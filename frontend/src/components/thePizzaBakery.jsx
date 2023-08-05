import { useEffect, useState } from "react";
import "../style/thePizzaBakery.css"
import { Link } from "react-router-dom";
import { useRef } from "react";



const ThePizzaBakery = () => {

    let [pizza, setPizza] = useState([])
    let [domi,setDomi]=useState([])

    let [cart,setCart] = useState([])

    let cart1 = useRef("")
    let cart2 = useRef("")
    let addToCart = useRef("")
     
    useEffect(() => {
        let fetchData = async () => {
            let fetchingPizza = await fetch("http://localhost:4000/thePizzaBakery")
            let afterFetching = await fetchingPizza.json()
            setPizza(afterFetching)
            setDomi(afterFetching)
        }
        fetchData()
    },[])

        let veges=()=>{
            let res=domi.filter((x)=>x.type=="veg")
            setPizza(res)
    }

    
    let nonveges=()=>{
        let res=domi.filter((x)=>x.type=="nonveg")
        setPizza(res)
        
    }

    let all=()=>{
        setPizza(domi)
     
    }

    let submit = (id) =>{
       let c=0
        cart.filter((x)=>{
            if(x.id==id){
                c++
            }
        })
            if(c==1){
               alert("product is exist")
            } 
            else{  
        
        pizza.filter((x)=>{
            if(x.id==id){
                let img = x.img
                let title = x.title
                let description = x.description
                let amount = x.amount
                let type = x.type
                let qty =  x.qty

                fetch("http://localhost:4000/cart",{

                method : "POST",
                headers : {"Content-Type":"application/json"},
                body:JSON.stringify({img,title,description,amount,type,qty})

                })
                alert("product added to cart")
               
            } 
        })
            }
        }
    

    if(cart1.current.innerText>0){
    cart1.current.style.display="inline-block"
        cart1.current.style.color="black"
        cart2.current.style.color="Red"   
    }
   
     
  useEffect(()=>{
    let fetchningFirst = async()=>{
        let fetchPart1 = await fetch("http://localhost:4000/cart")
        let fetchPart2 = await fetchPart1.json()

        setCart(fetchPart2)
    }
    fetchningFirst()
  })

    return (
        <div className="thePizzaBakery">

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
                        <Link to='/foodapp'><img id="homeFood" src="https://shorturl.at/acSY3" alt="" height={50} width={50} /></Link>
                        <Link to="/foodapp">Hungry Hub</Link>
                    </div>

                </div>

            </div>

            <div className="mainPizzaBakery">

                <div className="bake">

                    <div className="bake1">
                        <img src="https://b.zmtcdn.com/data/pictures/chains/2/18603822/ece76957e63b73a5fb092fb8ea5cef23_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="" />
                    </div>

                    <div className="bake2">
                        <img src="https://b.zmtcdn.com/data/pictures/chains/2/18603822/5db19b23b647cee4006a35db489bd1bc.jpg?fit=around|300:273&crop=300:273;*,*" alt="" height={206} width={300} />
                        <img src="https://b.zmtcdn.com/data/pictures/3/20704773/54c1de6b5f2081a97a2ebf4e6e1b4228.jpg?fit=around|300:273&crop=300:273;*,*" alt="" height={206} width={300} />
                    </div>

                </div>
                <h1>The Pizza Bakery</h1>
                <p id="desc">Pizza, Pasta, Continental, Italian, Salad, Beverages</p>
                <p id="place">Koramangala 5th Block, Bangalore</p>
                <p id="time">Open now - 12noon – 11pm (Today)</p>

                <div className="bake3">

                    <h1>Order Online</h1>
                    <input type="text" placeholder="Search within menu" />

                    <div className="cart">
                        <img id="cartImg" src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt="" height={30} />
                     <Link to="/cart">   <p ref={cart2}>Cart <sup id="supCard"  ref={cart1}>{cart.length}</sup></p></Link>
                    </div>

                </div>

                <div className="bake4">
                    <label htmlFor="" id="veg" ><input  type="radio" name="food" value="veg" onClick={veges} />Veg</label>
                    <label htmlFor="" id="nonVeg" ><input  type="radio" name="food" value="nonveg" onClick={nonveges} />Non Veg</label>
                    <label htmlFor="" id="all" ><input  type="radio" name="food" value="all" onClick={all} />All</label>

                </div>


                {
                    pizza.map((data) => {
                        return (
                            <div className="pizza">

                                <div className="fetchThePizza">
                                    <Link to={`/single/${data.id}`}><img src={data.img} alt="" /></Link>
                                </div>

                                <div className="fetchThePizza1">
                                   
                                    <h3>{data.title}</h3>
                                
                                    <div className="fetchThePizza2">
                                        <p id="thePizzaAmt">&#8377;{data.amount} for two</p>
                                        <p id="thePizzaRating">{data.rating}&#9734;</p>
                                    </div>
                                    
                                    <p id="thePizzaDec">{data.description}</p>
                                    <button id="cart" ref={addToCart} onClick={()=>submit(data.id)}>Add To Cart</button>
                                </div>

                            </div>
                        )
                    })
                }


            </div>

        </div>
    );

            }
export default ThePizzaBakery;