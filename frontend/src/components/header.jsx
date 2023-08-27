import "../style/header.css"
import { Link } from "react-router-dom"
const Header = () => {



  return (
   <div className="header">
        <div className="headPart1">
<marquee behavior="" direction="" scrollamount='10' id="marquee_style">please wait!! fetching data will take sometime. </marquee>

            <h1>HungryHub</h1>
            <p>Discover the best food & drinks in Bengaluru</p>

        </div>
        <div className="headPart2">
          
         <Link to="/foodDelivery">
            <div className="card1">
  <img src="https://shorturl.at/GKLU1" alt=""/>
  <h4>Order Online</h4>
    <p>Stay home and order to your doorstep</p>
</div>
</Link>

<Link to="/dining">
            <div className="card2">
  <img src="https://shorturl.at/hmGHR" alt=""/>
  <h4>Dining</h4>
    <p>View the city's favourite dining venues</p>
</div>
</Link>


<Link to="/nightlife">
            <div className="card3">
  <img src="https://shorturl.at/giwAY" alt=""/>
  <h4>Nightlife and Clubs</h4>
    <p>Explore the city’s top nightlife outlets</p>
</div>
</Link>
        </div>


   </div>
  )
}

export default Header