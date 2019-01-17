import React from 'react';
import {DeleteItem} from "./decrementItem";
import {productCount} from "../actions";
import {connect} from "react-redux";

function DeleteItemFromCart ({productCount, product, count}) {
    return (
        <div>
            <DeleteItem
                count={count}
                deleteItem={() => productCount(product.id, count = 0)}
            />
        </div>
    )
}

function mapStateToProps(state, ownProps) {
    return {
        product: ownProps.product,
        count: state.cart[ownProps.product.id]
    };
}

const mapDispatchToProps = {productCount};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteItemFromCart);