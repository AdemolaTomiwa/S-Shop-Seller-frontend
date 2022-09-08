import axios from 'axios';
import { server } from '../../config/server';
import {
   CREATE_PRODUCT_FAIL,
   CREATE_PRODUCT_REQUEST,
   CREATE_PRODUCT_SUCCESS,
   GET_PRODUCTS_FAIL,
   GET_PRODUCTS_REQUEST,
   GET_PRODUCTS_SUCCESS,
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
