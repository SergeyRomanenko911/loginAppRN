import firebase from 'firebase';

import { put } from 'redux-saga/effects';

import { registerFirebase } from '.';

import { USER_EMAIL_REGISTER_ERROR, USER_EMAIL_REGISTER_SUCCESS } from '../action/Register';

export const test = () => null;

export function* registerUser(action) {
  try {
    const {
      name, email, password, color,
    } = action.payload;
    const response = yield registerFirebase(email, password);
    const user = yield firebase.auth().currentUser;
    let errorMessage = null;
    yield user
      .updateProfile({
        displayName: name,
        photoURL: color,
      })
      .catch((error) => {
        errorMessage = error;
      });
    if (errorMessage !== null) {
      yield put({ type: USER_EMAIL_REGISTER_ERROR, error: { error: [errorMessage] } });
    } else if (response.status === 200) {
      yield put({
        type: USER_EMAIL_REGISTER_SUCCESS,
      });
    } else if (response.status === 401) {
      yield put({ type: USER_EMAIL_REGISTER_ERROR, error: { error: [response.error] } });
    } else {
      yield put({ type: USER_EMAIL_REGISTER_ERROR, error: { error: ['Some error, try again!'] } });
    }
  } catch (e) {
    yield put({
      type: USER_EMAIL_REGISTER_ERROR,
      error: { error: [e.message] },
    });
  }
}
