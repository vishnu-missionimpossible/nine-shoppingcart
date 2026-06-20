import React from 'react';

import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from "reactstrap"

const CartItem = ({product, addInCart}) => {
    return (
        <Card className="mt-2 mb-1">
            <CardImg 
            top 
            height="250"
            wdith="100%" 
            src={product.smallImage} 
            alt={product.productName} />
            <CardBody className="text-center">
                <CardTitle tag="h5">{product.productName}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">${product.productPrice}</CardSubtitle>
                <Button color="primary" onClick={() => addInCart(product)}>Add to Cart</Button>
            </CardBody>
        </Card>
    );
}

export default CartItem;