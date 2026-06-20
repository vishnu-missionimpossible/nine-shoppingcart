import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import BuyPage from './Components/BuyPage';
import Cart from './Components/Cart';
import 'react-toastify/dist/ReactToastify.css'; // Don't forget the styles!

import {Container, Row, Col} from "reactstrap";
import {ToastContainer, toast} from "react-toastify";


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
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md={8}>
          <BuyPage addToCart={addToCart} />
        </Col>
        <Col md={4}>
          <Cart cartItem={cartItem} removeItem={removeFromCart} addToCart={addToCart} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
