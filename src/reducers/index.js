import {PRODUCT_COUNT, REMOVE_FROM_CART} from "../constants/ActionType";

import products from '../products/products';

const initialState = {
    products,
    cart: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PRODUCT_COUNT:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    [action.payload.id]: action.payload.count
                }
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((payload) => payload !== action.payload)
            };

        default:
            return state;
    }
}