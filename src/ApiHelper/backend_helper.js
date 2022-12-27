/**
 * AMS Backend Service
 */
import {
  deleteFetcher,
  getFetcher,
  postFetcher,
  putFetcher
} from './api_helper'
import * as url from './url_helper'

export const login = async (userId, password) => {
  return await postFetcher(url.LOGIN_PATH(userId, password))
}

export const customerSignUpAPI = async (customer) => {
  return await postFetcher(url.CUSTOMER_SIGN_UP, customer)
}

export const updateCustomer = async (userId, customer) => {
  return await postFetcher(url.CUSTOMER_UPDATE(userId), customer)
}

export const courierSignUpAPI = async (courier) => {
  return await postFetcher(url.COURIER_SIGN_UP, courier)
}

export const createPackage = async (userId, data) => {
  return await postFetcher(url.CREATE_PACKAGE(userId), data)
}

export const getUserPackages = async (userId) => {
  return await getFetcher(url.CREATE_PACKAGE(userId))
}

export const getUserPayments = async (userId) => {
  return await getFetcher(url.GET_USER_PAYMENTS(userId))
}

export const getUserRecipients = async (userId) => {
  return await getFetcher(url.GET_USER_RECIPIENTS(userId))
}

export const addRecipient = async (userId, body) => {
  return await postFetcher(url.GET_USER_RECIPIENTS(userId), body)
}

export const deleteReciepient = async (recipientId) => {
  return await deleteFetcher(url.GET_USER_RECIPIENTS(recipientId))
}

export const getPackagePrice = async (body) => {
  return await postFetcher(url.PACKAGE_PRICE, body)
}
