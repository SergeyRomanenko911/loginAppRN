import firebase from 'firebase';

import { takeLatest } from 'redux-saga/effects';

// Auth
import {
  USER_EMAIL_LOGIN_REQUEST,
  USER_EMAIL_LOGIN_SUCCESS,
  USER_AUTOLOGIN_REQUEST,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCES,
} from '../action/Auth';
import { authUser, autoLoginUser, logOutUser } from './Auth';

// Register
import { USER_EMAIL_REGISTER_REQUEST, USER_EMAIL_REGISTER_SUCCESS } from '../action/Register';
import { registerUser } from './Register';

// Navigation
import { navigateOnLogin, navigateOnHome } from './Navigation';

export const registerFirebase = async (email, password) => firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then(data => ({
    status: 200,
    response: data,
  }))
  .catch((error) => {
    const errorMessage = error.message;
    return {
      status: 401,
      error: errorMessage,
    };
  });

export const authFirebase = async (email, password) => firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then(data => ({
    status: 200,
    response: data,
  }))
  .catch((error) => {
    const errorMessage = error.message;
    return {
      status: 401,
      error: errorMessage,
    };
  });

function* rootSaga() {
  // Login
  yield takeLatest(USER_EMAIL_LOGIN_REQUEST, authUser);
  yield takeLatest(USER_EMAIL_LOGIN_SUCCESS, navigateOnHome);

  // Register
  yield takeLatest(USER_EMAIL_REGISTER_REQUEST, registerUser);
  yield takeLatest(USER_EMAIL_REGISTER_SUCCESS, navigateOnLogin);

  // AutoLogin
  yield takeLatest(USER_AUTOLOGIN_REQUEST, autoLoginUser);

  // LogOut
  yield takeLatest(USER_LOGOUT_REQUEST, logOutUser);
  yield takeLatest(USER_LOGOUT_SUCCES, navigateOnLogin);
}

export default rootSaga;
