import axios from "axios";
import { SERVER_URL } from "../../environments";
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  WHO_AM_I,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE
} from "../user/userTypes";

// login
const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  };
};

const fetchUserSuccess = payload => {
  return {
    type: FETCH_USER_SUCCESS,
    payload
  };
};

const fetchUserFailure = error => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  };
};

export const whoAmI = payload => {
  return {
    type: WHO_AM_I,
    payload
  };
};

export const fetchUser = ({ email, password }) => {
  return function (dispatch) {
    dispatch(fetchUserRequest());

    const config = {
      header: {
        "Content-Type": "application/json"
      }
    };

    axios
      .post(
        `${SERVER_URL}/api/auth/login`,
        {
          email,
          password
        },
        config
      )
      .then(response => {
        console.log(`response.data`, response.data);
        const { success, message } = response.data;

        if (success) dispatch(fetchUserSuccess(response.data));

        if (!success) dispatch(fetchUserFailure({ error: message }));
      })
      .catch(err => {
        dispatch(fetchUserFailure(err));
      });
  };
};

// logout
const logoutUserRequest = () => {
  return {
    type: LOGOUT_USER_REQUEST
  };
};
const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS
  };
};
const logoutUserFailure = () => {
  return {
    type: LOGOUT_USER_FAILURE
  };
};

export const logoutUser = (_id, username, items) => {
  return async function (dispatch) {
    dispatch(logoutUserRequest);

    try {
      await axios.post(`${SERVER_URL}/api/auth/savelocalstorageitems`, {
        _id,
        username,
        items
      });

      // delete localStorage
      localStorage.removeItem("items");
      localStorage.removeItem("authToken");

      dispatch(logoutUserSuccess());
    } catch (error) {
      dispatch(logoutUserFailure());
    }
  };
};
