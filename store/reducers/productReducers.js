import {
   CREATE_PRODUCT_FAIL,
   CREATE_PRODUCT_REQUEST,
   CREATE_PRODUCT_RESET,
   CREATE_PRODUCT_SUCCESS,
   GET_PRODUCTS_FAIL,
   GET_PRODUCTS_REQUEST,
   GET_PRODUCTS_SUCCESS,
} from '../constants/productConstants';

// Get all product reducer
export const getProductsReducer = (state = { products: [] }, action) => {
   switch (action.type) {
      case GET_PRODUCTS_REQUEST:
         return { loading: true };
      case GET_PRODUCTS_SUCCESS:
         return { loading: false, products: action.payload };
      case GET_PRODUCTS_FAIL:
         return { loading: false };
      default:
         return state;
   }
};

// Create a product reducer
export const createProductReducer = (state = {}, action) => {
   switch (action.type) {
      case CREATE_PRODUCT_REQUEST:
         return { loading: true };
      case CREATE_PRODUCT_SUCCESS:
         return { loading: false, success: true };
      case CREATE_PRODUCT_FAIL:
         return { loading: false };
      case CREATE_PRODUCT_RESET:
         return {};
      default:
         return state;
   }
};
