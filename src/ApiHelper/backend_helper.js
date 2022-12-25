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

// get tables
export const login = async (userId, password) => {
  return await postFetcher(url.LOGIN_PATH(userId, password))
}
