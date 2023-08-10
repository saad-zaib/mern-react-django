import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.access);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        token: payload.access,
      };
      case SIGNUP_SUCCESS:
        localStorage.setItem("token", payload.access);
        return {
          ...state,
          isAuthenticated: true, // Update to true to indicate successful signup
          loading: false, // Set to false since the signup process is complete
          token: payload.access, // Optionally, update the token if necessary
        };
      
    case SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
      };

    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}


