import { useState, useEffect, useRef } from "react";
import "../style/cart.css"
import { Link } from "react-router-dom";
import axios from "axios";

const Cart = () => {

    let [initialCart, setCartData] = useState([])
    let totalCartPrice = 0

  
    let inc = (initialCart_id) =>{
        let res= initialCart.map((x)=>
            initialCart_id === x._id ? {...x, qty: x.qty + (x.qty < 10 ? 1:0)} : x
            )
            setCartData(res)
    }

    let dec = (initialCart_id) =>{
        let res1 = initialCart.map((x)=>
            initialCart_id === x._id ? {...x, qty: x.qty - (x.qty > 1 ? 1:0)} : x
            )
            setCartData(res1)
    }

   useEffect(() => {
    let fetchningFirst = async () => {
       let fetchPart1 = await axios.get('http://localhost:4000/cart')
       setCartData(fetchPart1.data)
    }
    fetchningFirst()
 },[])

   
    return (
        <div className="fetchingCartItem">
            <h1 id="cartPage">Cart</h1>
            {
                initialCart.map((data) => {
                    totalCartPrice += data.amount * data.qty;
                    return (
                        <div className="fetchingCartItem1">
                        <div className="fetch1Cart">

                            <div className="fetch2Cart">
                                <img src={data.img} alt="" />
                            </div>

                            <div className="fetch3Cart">
                                <h3 id="titleCart">{data.title}</h3>
                                <h4 id="typeCart">{data.type}</h4>
                            
                               <button id="incCart" onClick={()=>inc(data._id)}>+</button>
                                <h4 id="qtyCart">{data.qty}</h4>
                                <button id="decCart" onClick={()=>dec(data._id)}>-</button>
                            </div>
                            <div className="fetch4Amt">
                            <h4 id="amtCart">&#8377;{data.amount}</h4>
                            </div>
  
                        </div>

                        </div>
                    )
                })
            }
             <div className="fetch5CartValue">
                      <p id="totalAmt" >Total Amt:</p> <p id="totalCartPrice">&#8377;{totalCartPrice}</p>
                        </div>
                        <div className="fetch6Cart">
                            <button>Checkout</button>
                        </div>
             <div className="cont_Cart">
                     <Link to="/hungryhub"><p id="cont_Cart">Continue Shopping </p></Link>   
                        </div>
        </div>
       

    );
}

export default Cart;