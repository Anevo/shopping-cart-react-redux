import React from 'react';
import CountProducts from "./counter";
import {productCount} from "../actions";
import {connect} from "react-redux";
import {Card, Elevation} from "@blueprintjs/core";
import './product.css';

function Product({productCount, product, count}) {
    return (
        <Card className="card-style" elevation={Elevation.FOUR}>
            <div className="products">
                <div>
                    <img src={product.image} width={"150px;"} height={"100px;"}/>
                    <h2>{product.name}</h2>
                    <h3>${product.price}</h3>
                    <CountProducts
                        count={count}
                        increment={() => productCount(product.id, count + 1)}
                        decrement={() => productCount(product.id, count - 1)}
                    />
                </div>
                <div>
                    <h2>Total ${(count * product.price).toFixed(2)}</h2>
                </div>
            </div>
        </Card>
    )
}

function mapStateToProps(state, ownProps) {
    return {
        product: ownProps.product,
        count: state.cart[ownProps.product.id] || 0
    };
}

const mapDispatchToProps = {productCount};

export default connect(mapStateToProps, mapDispatchToProps)(Product);