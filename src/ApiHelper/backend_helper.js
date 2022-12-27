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
  return await putFetcher(url.CUSTOMER_UPDATE(userId), customer)
}

export const courierSignUpAPI = async (courier) => {
  return await postFetcher(url.COURIER_SIGN_UP, courier)
}

export const createPackage = async (userId, data) => {
  return await postFetcher(url.CREATE_PACKAGE(userId), data)
}

export const getUserPackagesInactive = async (userId) => {
  return await getFetcher(url.GET_INACTIVE_PACKAGES(userId))
}

export const getUserPackagesActive = async (userId) => {
  return await getFetcher(url.GET_ACTIVE_PACKAGES(userId))
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

export const updateRecipient = async (recipientId, body) => {
  return await putFetcher(url.GET_USER_RECIPIENTS(recipientId), body)
}

export const updatePackage = async (id, body) => {
  return await putFetcher(url.CREATE_PACKAGE(id), body)
}

export const deleteReciepient = async (recipientId) => {
  return await deleteFetcher(url.GET_USER_RECIPIENTS(recipientId))
}

export const getPackagePrice = async (body) => {
  return await postFetcher(url.PACKAGE_PRICE, body)
}

export const getAllPackages = async () => {
  return await getFetcher(url.GET_PACKAGES)
}

export const getAllCourier = async () => {
  return await getFetcher(url.GET_COURIER)
}

export const getAllComplaints = async () => {
  return await getFetcher(url.GET_COMPLAINT(4))
}
export const getUserComplaints = async (userId) => {
  return await getFetcher(url.GET_COMPLAINT(userId))
}
export const createComplaint = async (packageId, userId, body) => {
  return await postFetcher(url.CREATE_COMPLAINT(packageId, userId), body)
}

export const createPaymentMethod = async (userId, body) => {
  return await postFetcher(url.GET_USER_PAYMENTS(userId), body)
}

export const deletePaymentMethod = async (accountNo, userId) => {
  return await deleteFetcher(url.DELETE_PAYMENTS(accountNo, userId))
}

export const updateCourier = async (id, body) => {
  return await putFetcher(url.UPDATE_COURIER(id), body)
}

export const updateComplaint = async (id, body) => {
  return await putFetcher(url.UPDATE_COMPLAINT(id), body)
}

export const getAllReports = async () => {
  return await getFetcher(url.GET_REPORT)
}

export const getReportById = async (id) => {
  return await getFetcher(url.GET_REPORT_ID(id))
}
