import React from 'react';
import {Card, Elevation} from '@blueprintjs/core';
import DeleteItemFromCart from '../components/decrement';
import './cart.css';

function Cart(props) {
    let totalPrice = 0;

    props.products.forEach(p => {
        let inCartItemsCount = props.cart[p.id] || 0;

        totalPrice = totalPrice + (p.price * inCartItemsCount);
    });


    const productsInCart = Object.keys(props.cart).map((productId) => {
        const product = props.products.find((p) => p.id.toString() === productId);
        const countProductInCart = props.cart[productId];
        if (!countProductInCart) {
            return null;
        }
        return <div className="cart-details" key={productId}>
            <div className="cart-product-detail">
            {product.name} x {countProductInCart}
            </div>
            <div className="cart-delete-button">
                <DeleteItemFromCart product={product}/>
            </div>
        </div>;
    });

    // const removeItem = (product) => {
    //     this.props.dispatch(removeItem(product));
    // };

    return (
        <div className="flex-container">

            <Card className="card-cart" elevation={Elevation.FOUR}>
                <div className="cart-total">
                    <div>
                        <h4>Total</h4>
                        <span>${totalPrice.toFixed(2)}</span>
                        <hr/>
                    </div>
                    <div className="product-names">
                        <div><b>In Cart</b></div>
                        <div>{productsInCart}</div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Cart;