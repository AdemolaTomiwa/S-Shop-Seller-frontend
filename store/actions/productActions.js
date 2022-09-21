import axios from 'axios';
import { server } from '../../config/server';
import { CLEAR_ERRORS } from '../constants/errorConstants';
import {
   CREATE_PRODUCT_FAIL,
   CREATE_PRODUCT_REQUEST,
   CREATE_PRODUCT_SUCCESS,
   DELETE_PRODUCT_FAIL,
   DELETE_PRODUCT_REQUEST,
   DELETE_PRODUCT_SUCCESS,
   GET_PRODUCTS_FAIL,
   GET_PRODUCTS_REQUEST,
   GET_PRODUCTS_SUCCESS,
   GET_PRODUCT_FAIL,
   GET_PRODUCT_REQUEST,
   GET_PRODUCT_SUCCESS,
   UPDATE_PRODUCT_FAIL,
   UPDATE_PRODUCT_REQUEST,
   UPDATE_PRODUCT_SUCCESS,
} from '../constants/productConstants';
import { returnErrors } from './errorActions';
import { tokenConfig } from './userActions';

export const getProducts =
   (keyword = '') =>
   async (dispatch, getState) => {
      try {
         dispatch({ type: GET_PRODUCTS_REQUEST });

         const { data } = await axios.get(
            `${server}/api/products?keyword=${keyword}`,
            tokenConfig(getState)
         );

         dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
      } catch (err) {
         dispatch(returnErrors(err.response.data.msg));
         dispatch({ type: GET_PRODUCTS_FAIL });
      }
   };

// Get all products
export const getProduct = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: GET_PRODUCT_REQUEST });

      const { data } = await axios.get(
         `${server}/api/products/${id}`,
         tokenConfig(getState)
      );

      dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: GET_PRODUCT_FAIL });
   }
};
export const createProduct = (product) => async (dispatch, getState) => {
   try {
      dispatch({ type: CREATE_PRODUCT_REQUEST });

      const { data } = await axios.post(
         `${server}/api/products`,
         product,
         tokenConfig(getState)
      );

      dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: CREATE_PRODUCT_FAIL });
   }
};

// update existing product (seller)
export const updateProduct = (details, id) => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: UPDATE_PRODUCT_REQUEST });

      const { data } = await axios.put(
         `${server}/api/products/${id}`,
         details,
         tokenConfig(getState)
      );

      dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: UPDATE_PRODUCT_FAIL });
   }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: DELETE_PRODUCT_REQUEST });

      const { data } = await axios.delete(
         `${server}/api/products/${id}`,
         tokenConfig(getState)
      );

      dispatch({ type: DELETE_PRODUCT_SUCCESS });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: DELETE_PRODUCT_FAIL });
   }
};
