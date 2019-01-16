import React from 'react';

function CountProducts({count, increment, decrement}) {
    return <div className="counter-buttons">
        <button
            className="decrement-product"
            onClick={decrement}
            disabled={count <= 0}
        >
            -
        </button>
        <span>Qty: {count}</span>
        <button
            className="increment-product"
            onClick={increment}
        >
            +
        </button>
    </div>;
}

export default CountProducts;