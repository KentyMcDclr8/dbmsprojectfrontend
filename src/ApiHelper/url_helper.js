export const COMMON_PATH = 'http://localhost:8080/'
export const LOGIN_PATH = (userId, password) => COMMON_PATH + 'api/login?id=' + userId + '&password=' + password
export const CUSTOMER_SIGN_UP = COMMON_PATH + 'customer'
export const CUSTOMER_UPDATE = (userId) => COMMON_PATH + 'customer/' + userId

export const COURIER_SIGN_UP = COMMON_PATH + 'courier'
export const CREATE_PACKAGE = (userId) => COMMON_PATH + 'package/' + userId
export const GET_PACKAGES = COMMON_PATH + 'package'
export const GET_COURIER = COMMON_PATH + 'courier'
export const GET_COMPLAINT = (userId) => COMMON_PATH + 'complaint'
export const CREATE_COMPLAINT = (packageId, userId) => COMMON_PATH + 'complaint/' + packageId
export const UPDATE_COURIER = (userId) => COMMON_PATH + 'courier/' + userId
export const UPDATE_COMPLAINT = (userId) => COMMON_PATH + 'complaint/' + userId

export const GET_ACTIVE_PACKAGES = (userId) => COMMON_PATH + 'package/' + userId + '/active'
export const GET_INACTIVE_PACKAGES = (userId) => COMMON_PATH + 'package/' + userId + '/inactive'

export const GET_USER_PAYMENTS = (userId) => COMMON_PATH + 'paymentdetails/' + userId
export const GET_USER_RECIPIENTS = (userId) => COMMON_PATH + 'recipient/' + userId
export const DELETE_PAYMENTS = (accountNumber, userId) => COMMON_PATH + 'paymentdetails/' + accountNumber + '/' + userId

export const PACKAGE_PRICE = COMMON_PATH + 'package/price'
export const GET_REPORT = COMMON_PATH + 'report'
export const GET_REPORT_ID = (userId) => COMMON_PATH + 'report/' + userId
