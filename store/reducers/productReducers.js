import {
   CREATE_PRODUCT_FAIL,
   CREATE_PRODUCT_REQUEST,
   CREATE_PRODUCT_RESET,
   CREATE_PRODUCT_SUCCESS,
   DELETE_PRODUCT_FAIL,
   DELETE_PRODUCT_REQUEST,
   DELETE_PRODUCT_RESET,
   DELETE_PRODUCT_SUCCESS,
   GET_PRODUCTS_FAIL,
   GET_PRODUCTS_REQUEST,
   GET_PRODUCTS_SUCCESS,
   GET_PRODUCT_FAIL,
   GET_PRODUCT_REQUEST,
   GET_PRODUCT_SUCCESS,
   UPDATE_PRODUCT_FAIL,
   UPDATE_PRODUCT_REQUEST,
   UPDATE_PRODUCT_RESET,
   UPDATE_PRODUCT_SUCCESS,
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

// Get all product reducer
export const getProductReducer = (state = { product: {} }, action) => {
   switch (action.type) {
      case GET_PRODUCT_REQUEST:
         return { loading: true };
      case GET_PRODUCT_SUCCESS:
         return { loading: false, product: action.payload };
      case GET_PRODUCT_FAIL:
         return { loading: false };
      default:
         return state;
   }
};

// Update a product by a seller reducer
export const updateProductReducer = (state = { product: {} }, action) => {
   switch (action.type) {
      case UPDATE_PRODUCT_REQUEST:
         return { loading: true };
      case UPDATE_PRODUCT_SUCCESS:
         return { loading: false, success: true };
      case UPDATE_PRODUCT_FAIL:
         return { loading: false };
      case UPDATE_PRODUCT_RESET:
         return {};
      default:
         return state;
   }
};

// Get seller products reducer
export const deleteProductReducer = (state = {}, action) => {
   switch (action.type) {
      case DELETE_PRODUCT_REQUEST:
         return { loading: true };
      case DELETE_PRODUCT_SUCCESS:
         return { loading: false, success: true };
      case DELETE_PRODUCT_FAIL:
         return { loading: false };
      case DELETE_PRODUCT_RESET:
         return {};
      default:
         return state;
   }
};
