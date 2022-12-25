export const COMMON_PATH = 'http://localhost:8080/api/'
export const LOGIN_PATH = (userId, password) => COMMON_PATH + 'login?id=' + userId + '&password=' + password

// http://localhost:8080/api/login?id=5&password=password123
