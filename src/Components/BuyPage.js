import React, {useState, useEffect} from 'react';
import  Axios  from 'axios';
import CartItem from './CartItem';

import { faker } from "@faker-js/faker";
import {Container, Row, Col} from "react-bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Don't forget the styles!

const apiKey = "ec7545b22bb7a560c021812f0d838e824bc89ccfb491e320407c2d594db38006";

const url = "https://jsonhosting.com/api/json/17d784d0";

const localURL = "https://jsonhosting.com/api/json/17d784d0";

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
        try {
            const {data} = await Axios.get(localURL);

            //Parsing start
            // Assuming 'data' is the raw text you received from the URL
            const firstParse = JSON.parse(data);
            console.log(firstParse.id); // "17d784d0"

            // The 'content' is a string. Parse it again to get the real data.
            const actualData = JSON.parse(firstParse.content);
            console.log(actualData.total_results); // 2735
            console.log(actualData.photos[0].photographer); // "JÉSHOOTS"
            //parsing end
           

            // Check if actualData and actualData.photos exist before mapping
            if (actualData && actualData.photos && Array.isArray(actualData.photos)) {
                const allProducts = actualData.photos.map((photo) => ({
                    smallImage: photo.src.small,
                    tinyImage: photo.src.tiny,
                    productName: faker.commerce.productName(),
                    productPrice: faker.commerce.price(),
                    id: faker.random.uuid(),
                }));

                setProducts(allProducts);
            } else {
                console.error("Unexpected data structure:", actualData);
                toast.error("Failed to load products");
            }
        } catch (error) {
            console.error("Error fetching or parsing products:", error);
            toast.error("Error fetching products");
        }
    }; 
    



    useEffect(() => {
        fechProducts();
    }, []);

    return (
        <Container fluid>
            <h1 className="text-success text-center">Buy Products</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product.id} md={4} className="mb-4">
                        <CartItem product={product} addToCart={addToCart} />
                    </Col>
                ))} 
            </Row> 
        </Container>
    )
      
};

export default BuyPage;
