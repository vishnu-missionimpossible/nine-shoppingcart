import React, {useState, useEffect} from 'react';
import CartItem from './CartItem';
import productsData from './PEXELS.json';

import { faker } from "@faker-js/faker";
import {Container, Row, Col} from "react-bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Don't forget the styles!

const BuyPage = ({addToCart}) => {

    const [products, setProducts] = useState([]);
  

    const fechProducts = () => {
        try {
            // Use the local PEXELS.json data
            if (productsData && productsData.photos && Array.isArray(productsData.photos)) {
                const allProducts = productsData.photos.map((photo) => ({
                    smallImage: photo.src.small,
                    tinyImage: photo.src.tiny,
                    productName: faker.commerce.productName(),
                    productPrice: parseFloat(faker.commerce.price()),
                    id: faker.string.uuid(),
                }));

                setProducts(allProducts);
                toast.success("Products loaded successfully!");
            } else {
                console.error("Unexpected data structure:", productsData);
                toast.error("Failed to load products");
            }
        } catch (error) {
            console.error("Error loading products:", error);
            toast.error("Error loading products");
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
