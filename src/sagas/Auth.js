import { put } from 'redux-saga/effects'; // select,

import { AsyncStorage } from 'react-native';

import { authFirebase } from '.';

import {
  USER_EMAIL_LOGIN_ERROR,
  USER_EMAIL_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCES,
  USER_LOGOUT_ERROR,
} from '../action/Auth';

export const test = () => null;

export function* authUser(action) {
  try {
    const { email, password } = action.payload;
    const response = yield authFirebase(email, password);
    console.log('auth user', response);

    if (response.status === 200) {
      const { user } = response.response;
      yield AsyncStorage.multiSet([['user', JSON.stringify(user)]]);
      yield put({
        type: USER_EMAIL_LOGIN_SUCCESS,
        user,
      });
    } else if (response.status === 401) {
      yield put({ type: USER_EMAIL_LOGIN_ERROR, error: { error: [response.error] } });
    } else {
      yield put({ type: USER_EMAIL_LOGIN_ERROR, error: { error: ['Some error, try again!'] } });
    }
  } catch (e) {
    yield put({
      type: USER_EMAIL_LOGIN_ERROR,
      error: { error: [e.message] },
    });
  }
}

export function* autoLoginUser() {
  try {
    const user = yield AsyncStorage.getItem('user');
    yield put({
      type: USER_EMAIL_LOGIN_SUCCESS,
      user: JSON.parse(user),
    });
  } catch (e) {
    yield put({
      type: USER_EMAIL_LOGIN_ERROR,
      error: `${e.message} ---> authUser catch error`,
    });
  }
}

export function* logOutUser() {
  try {
    yield AsyncStorage.removeItem('user');
    yield put({
      type: USER_LOGOUT_SUCCES,
    });
  } catch (e) {
    yield put({
      type: USER_LOGOUT_ERROR,
      error: `${e.message} ---> logoutUser catch error`,
    });
  }
}
