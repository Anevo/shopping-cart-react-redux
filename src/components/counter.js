import React from 'react';
import './counter.css';

function CountProducts({count, increment, decrement}) {
    return <div className="counter-buttons">
        <button
            className="bp3-button decrement-product"
            onClick={decrement}
            disabled={count <= 0}
        >
            -
        </button>
        <span>Qty: {count}</span>
        <button
            className="bp3-button increment-product"
            onClick={increment}
        >
            +
        </button>
    </div>;
}

export default CountProducts;