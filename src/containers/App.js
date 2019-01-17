import React, {Component} from 'react';
import {connect} from "react-redux";

import './App.css';
import ProductList from "../containers/productList";
import Cart from "../containers/cart";

class App extends Component {
    render() {
        return (
            <div className="App">
                <ProductList products={this.props.products}/>
                <div className="cart">
                    <Cart products={this.props.products}
                          cart={this.props.cart}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products,
    cart: state.cart
});
export default connect(mapStateToProps)(App);
