export const COMMON_PATH = 'http://localhost:8080/'
export const LOGIN_PATH = (userId, password) => COMMON_PATH + 'api/login?id=' + userId + '&password=' + password
export const CUSTOMER_SIGN_UP = COMMON_PATH + 'customer'
export const CUSTOMER_UPDATE = (userId) => COMMON_PATH + 'customer/' + userId

export const COURIER_SIGN_UP = COMMON_PATH + 'courier'
export const CREATE_PACKAGE = (userId) => COMMON_PATH + 'package/' + userId

export const GET_USER_PAYMENTS = (userId) => COMMON_PATH + 'paymentdetails/' + userId
export const GET_USER_RECIPIENTS = (userId) => COMMON_PATH + 'recipient/' + userId

export const PACKAGE_PRICE = COMMON_PATH + 'package/price'
