import React, {useState, useEffect} from 'react';
import  Axios  from 'axios';

import { faker } from "@faker-js/faker";
import {Container, Row, Col} from "react-bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Don't forget the styles!

const apiKey = "85d0877cac20e1aa5bf72180064cb3ad849eea85e9131d0e6db73fed083bc271";

const url = "https://jsonhosting.com/api/json/81379a94/raw";

const localURL = "https://jsonhosting.com/api/json/81379a94/raw";

const BuyPage = ({addToCart}) => {

    const [products, setProducts] = useState([]);
  
    //with API Key
    // const fechProducts = async () => {
    //     const {data} = await Axios.get(url, {
    //         headers: {
    //             Authorization: `Bearer ${apiKey}`
    //         }
    //     });
    //     setProducts(data);
    // }


    // localURL without API Key
    const fechProducts = async () => {
        const {data} = await Axios.get(localURL);
   
    const photos = data.photos;

    const allProducts = photos.map((photo) => ({
        smallImage: photo.src.small,
        tinyImage: photo.src.tiny,
        productName: faker.commerce.productName(),
        productPrice: faker.commerce.price(),
        id: faker.random.uuid(),
    }))

    setProducts(allProducts);
    }; 
    



    useEffect(() => {
        fechProducts();
    }, []);

    return (
        <Container fluid>
            <h1 className="text-success text-center">Buy Products</h1>
            <Row>
                {products.map((product) => (
                    <span key={product.id}>{product.productName}</span>
                ))} 
            </Row> 
        </Container>
    )
      
};

export default BuyPage;
