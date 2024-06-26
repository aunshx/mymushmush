import axios from 'axios';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken'

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types';

// Load User
export const loadUser = () => async dispatch => {
  if(localStorage.token){
        setAuthToken(localStorage.token)
    }
  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User kk
export const register = ({ name, email, password, securityKey }) => async dispatch => {

    const config = {
          headers: {
              'Content-Type': 'application/json'
          }
      }

    const body = JSON.stringify({ name, email, password, securityKey })

  try {
    const res = await axios.post('/api/users', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        
        dispatch({
            type: REGISTER_FAIL
        })
  }
};

// Login User
export const login = ({email, password, securityKey}) => async dispatch => {
  
  // Attach the headers
  const config = {
          headers: {
              'Content-Type': 'application/json'
          }
      }

    const body = JSON.stringify({ email, password, securityKey })

  try {
    const res = await axios.post('/api/auth', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (error) {
    if(error.response){
      const errors = error.response.data.errors;
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });
