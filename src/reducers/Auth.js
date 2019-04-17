import {
  USER_EMAIL_LOGIN_REQUEST,
  USER_EMAIL_LOGIN_ERROR,
  USER_EMAIL_LOGIN_SUCCESS,
  USER_LOGOUT_ERROR,
  USER_LOGOUT_SUCCES,
  CLEAN_AUTH_ERROR,
} from '../action/Auth';

const initialState = {
  isAuth: false,
  token: null,
  isFetching: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAN_AUTH_ERROR: {
      return {
        ...state,
        error: null,
      };
    }

    case USER_EMAIL_LOGIN_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }

    case USER_EMAIL_LOGIN_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }

    case USER_EMAIL_LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        token: action.token,
        user: action.user,
        isFetching: false,
        error: null,
      };
    }

    case USER_LOGOUT_ERROR: {
      return {
        ...state,
        isFetching: false,
        user: null,
        auth: null,
        token: null,
        expires: null,
        error: action.error,
      };
    }

    case USER_LOGOUT_SUCCES: {
      return {
        ...state,
        isAuth: false,
        isFetching: false,
        error: null,
        user: null,
        auth: null,
        token: null,
        expires: null,
      };
    }
    default:
      return state;
  }
};

export default reducer;
