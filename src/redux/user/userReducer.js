import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  WHO_AM_I,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE
} from "./userTypes";

const initialState = {
  username: "invitado",
  _id: null,
  roles: ["guest"],
  isLogged: false,
  loading: false,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_USER_SUCCESS:
      localStorage.setItem("authToken", action.payload.token);
      return {
        ...state,
        username: action.payload.user.username,
        _id: action.payload.user._id,
        roles: action.payload.user.role,
        isLogged: true,
        loading: false,
        error: null
      };

    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        isLogged: false,
        error: action.payload.error
      };

    case WHO_AM_I:
      return {
        ...state,
        username: action.payload.username,
        _id: action.payload._id,
        roles: [...action.payload.roles],
        isLogged: true,
        loading: false
      };

    case LOGOUT_USER_REQUEST:
      return { ...state, loading: true };

    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        username: "invitado",
        _id: null,
        roles: ["guest"],
        isLogged: false,
        loading: false
      };

    case LOGOUT_USER_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default userReducer;
