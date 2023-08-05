
import './App.css';
import FoodDelivery from './components/foodDelivery';
import Header from './components/header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Nightlife from './components/nightLife';
import Dining from './components/dining';
import BookMark from './components/bookmark';
import Cart from './components/cart';
import ProductItems from './components/productItems';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
      <Route path='/foodapp' element={<Header/>} />
      <Route path='/foodDelivery' element={<FoodDelivery/>} />
      <Route path='/dining' element={<Dining/>} />
      <Route path='/nightlife' element={<Nightlife/>} />
      <Route path='/bookmark' element={<BookMark/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/foodDelivery/:id' element={<ProductItems/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

