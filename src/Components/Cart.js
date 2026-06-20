import React from 'react';
import {
    Container,
    Row,
    Col,    
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader,
    CardBody,
    Card,
    CardFooter
} from "reactstrap"

const Cart = ({cartItem, removeItem, addToCart}) => {
    let amount = 0;

    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice);
    });
    return (
        <Container fluid>
            <h1 className="text-success text-center">Your Cart</h1>
            <ListGroup>    
                {cartItem.map((item) => (
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col md={6}>
                                <h5>{item.productName}</h5>
                            </Col>
                            <Col md={3}>
                                <p>${item.productPrice.toFixed(2)}</p>
                            </Col>
                            <Col md={3}>
                                <Button color="danger" onClick={() => removeItem(item.id)}>Remove</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>

                    
                ))}
            </ListGroup>
            {/* If everything is empty */}
                    {
                        cartItem.length >= 1 ? (
                            <Card className="text-center mt-4">
                                <CardHeader>Total Amount</CardHeader>
                                <CardBody>
                                    Your amount for {cartItem.length} product(s) is ${amount.toFixed(2)}
                                </CardBody>
                                <CardFooter>
                                    <Button color="success" onClick={() => addToCart(cartItem)}>Checkout</Button>
                                </CardFooter>
                            </Card>
                        ) : (
                            <Card className="text-center mt-4">
                                <CardHeader>Your Cart is Empty</CardHeader>
                            </Card>
                        )
                    }
        </Container>
    );
}

export default Cart;