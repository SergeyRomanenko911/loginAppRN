export const USER_EMAIL_REGISTER_REQUEST = 'USER_EMAIL_REGISTER_REQUEST';
export const USER_EMAIL_REGISTER_ERROR = 'USER_EMAIL_REGISTER_ERROR';
export const USER_EMAIL_REGISTER_SUCCESS = 'USER_EMAIL_REGISTER_SUCCESS';

export const CLEAN_REG_ERROR = 'CLEAN_REG_ERROR';

export const registerCustomerRequest = payload => ({
  type: USER_EMAIL_REGISTER_REQUEST,
  payload,
});

export const cleanRegisterError = () => ({
  type: CLEAN_REG_ERROR,
});
