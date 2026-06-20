import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import BuyPage from './Components/BuyPage'; import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Don't forget the styles!

function App() {

  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex((i) => i.id === item.id);
    if (isAlreadyAdded !== -1) {
      toast.error("Item already added to cart");
    }
    setCartItem([...cartItem, item]);
  };

  const buyNow = (item) => {
    setCartItem([]);
    toast.success("Purchase successful");
  }

  const removeFromCart = (item) => {
    const updatedCart = cartItem.filter((i) => i.id !== item.id);
    setCartItem(updatedCart);
    toast.success("Item removed from cart");
  }

  return (
    <div className="App">
      <BuyPage addToCart={addToCart} /> 
    </div>
  );
}

export default App;
