import {
  USER_EMAIL_REGISTER_ERROR,
  USER_EMAIL_REGISTER_SUCCESS,
  USER_EMAIL_REGISTER_REQUEST,
  CLEAN_REG_ERROR,
} from '../action/Register';

const initialState = {
  isRegistered: false,
  isFetching: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAN_REG_ERROR: {
      return {
        ...state,
        error: null,
      };
    }

    case USER_EMAIL_REGISTER_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }

    case USER_EMAIL_REGISTER_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }

    case USER_EMAIL_REGISTER_SUCCESS: {
      return {
        ...state,
        isRegistered: true,
        isFetching: false,
        error: null,
      };
    }

    default:
      return state;
  }
};

export default reducer;
