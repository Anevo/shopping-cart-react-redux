import {PRODUCT_COUNT} from "../constants/ActionType";

export const productCount = (id, count) => ({
    type: PRODUCT_COUNT,
    payload: {count, id}
});