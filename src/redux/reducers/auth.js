import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  GET_WISHLISTS,
  REGISTER_FAIL,
  UPDATE_PROFILE,
  UPDATE_USER,
} from "../actions/types";

const initialState = {
  token: "",
  isAuthenticated: null,
  isLoading: false,
  user: null,
  profile: null,
  userWishlists: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.user,
        profile: action.payload.user.profile,
      };

    case UPDATE_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      // localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        profile: action.payload.user.profile,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      // localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        profile: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case GET_WISHLISTS:
      return {
        ...state,
        userWishlists: action.payload,
      };
    default:
      return state;
  }
}
