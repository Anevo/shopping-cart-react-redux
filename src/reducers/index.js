import {PRODUCT_COUNT} from "../constants/ActionType";

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
        default:
            return state;
    }
}