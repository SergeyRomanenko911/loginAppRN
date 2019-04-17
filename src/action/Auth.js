export const USER_EMAIL_LOGIN_REQUEST = 'USER_EMAIL_LOGIN_REQUEST';
export const USER_EMAIL_LOGIN_ERROR = 'USER_EMAIL_LOGIN_ERROR';
export const USER_EMAIL_LOGIN_SUCCESS = 'USER_EMAIL_LOGIN_SUCCESS';

export const USER_AUTOLOGIN_REQUEST = 'USER_AUTOLOGIN_REQUEST';

export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const USER_LOGOUT_ERROR = 'USER_LOGOUT_ERROR';
export const USER_LOGOUT_SUCCES = 'USER_LOGOUT_SUCCES';

export const CLEAN_AUTH_ERROR = 'CLEAN_AUTH_ERROR';

export const authEmailRequest = payload => ({
  type: USER_EMAIL_LOGIN_REQUEST,
  payload,
});

export const userAutoLogin = () => ({
  type: USER_AUTOLOGIN_REQUEST,
});

export const logOutUser = () => ({
  type: USER_LOGOUT_REQUEST,
});

export const cleanAuthError = () => ({
  type: CLEAN_AUTH_ERROR,
});
