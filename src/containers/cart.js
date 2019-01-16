import React from 'react';

function Cart(props) {
    let totalPrice = 0;

    props.products.forEach(p => {
        let inCartItemsCount = props.cart[p.id] || 0;
        totalPrice = totalPrice + (p.price * inCartItemsCount);
    });

    return (
        <div>
            <span>Total ${totalPrice.toFixed(2)}</span>
        </div>
    )
}

export default Cart;