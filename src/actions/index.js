import {PRODUCT_COUNT, REMOVE_FROM_CART} from "../constants/ActionType";

export const productCount = (id, count) => ({
    type: PRODUCT_COUNT,
    payload: {count, id}
});

export function removeItemFromCart(product) {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}