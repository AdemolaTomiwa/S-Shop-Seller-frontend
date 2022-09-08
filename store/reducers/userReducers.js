import {
   LOGIN_USER_REQUEST,
   LOGIN_USER_SUCCESS,
   LOGIN_USER_FAIL,
   REGISTER_USER_REQUEST,
   REGISTER_USER_SUCCESS,
   REGISTER_USER_FAIL,
   USER_LOGOUT,
   UPDATE_USER_DETAILS_REQUEST,
   UPDATE_USER_DETAILS_SUCCESS,
   UPDATE_USER_DETAILS_FAIL,
   CHANGE_USER_LOGIN_REQUEST,
   CHANGE_USER_LOGIN_SUCCESS,
   CHANGE_USER_LOGIN_FAIL,
   UPDATE_USER_DETAILS_RESET,
   CHANGE_USER_LOGIN_RESET,
} from '../constants/userConstants';

// login user
export const loginReducer = (state = {}, action) => {
   switch (action.type) {
      case LOGIN_USER_REQUEST:
         return { loading: true };
      case LOGIN_USER_SUCCESS:
         return {
            loading: true,
            user: action.payload.user,
            token: action.payload.token,
         };
      case LOGIN_USER_FAIL:
         return { loading: false };
      case USER_LOGOUT:
         return {};
      default:
         return state;
   }
};

// register user
export const registerReducer = (state = {}, action) => {
   switch (action.type) {
      case REGISTER_USER_REQUEST:
         return { loading: true };
      case REGISTER_USER_SUCCESS:
         return {
            loading: true,
            user: action.payload.user,
            token: action.payload.token,
         };
      case REGISTER_USER_FAIL:
         return { loading: false };
      case USER_LOGOUT:
         return {};
      default:
         return state;
   }
};

// Update user
export const updateReducer = (state = {}, action) => {
   switch (action.type) {
      case UPDATE_USER_DETAILS_REQUEST:
         return { loading: true };
      case UPDATE_USER_DETAILS_SUCCESS:
         return {
            loading: false,
            success: true,
         };
      case UPDATE_USER_DETAILS_FAIL:
         return { loading: false };
      case UPDATE_USER_DETAILS_RESET:
         return {};
      case USER_LOGOUT:
         return {};
      default:
         return state;
   }
};

// Change login details
export const changeLoginReducer = (state = {}, action) => {
   switch (action.type) {
      case CHANGE_USER_LOGIN_REQUEST:
         return { loading: true };
      case CHANGE_USER_LOGIN_SUCCESS:
         return {
            loading: false,
            success: true,
         };
      case CHANGE_USER_LOGIN_FAIL:
         return { loading: false };
      case CHANGE_USER_LOGIN_RESET:
         return {};
      case USER_LOGOUT:
         return {};
      default:
         return state;
   }
};
