import React from 'react';
import Product from '../components/product';
import './productList.css';

function ProductList(props) {
    return (
        <div className="productList">
            {props.products.map(p => <Product key={p.id} product={p} />)}
        </div>
    )
}

export default ProductList;