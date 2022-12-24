import { getKeycloakInstance } from '@react-keycloak/ssr'
import { HttpError } from '../helper/errors'
import authHeader from './auth_token_header'

const _handleError = async response => {
  if (!response.ok) {
    // 401 : UNAUTHORIZED
    if (response.status === 401) {
      await getKeycloakInstance().logout()
    }
    // 408 : TIMEOUT
    else if (response.status === 408) {
      throw new HttpError(408, 'Connection timeout')
    }
    // OTHER CODES: Convert response to json and check if it has meta field
    let errorData
    try {
      errorData = await response.json()
    } catch {}

    if (errorData?.meta) {
      throw new HttpError(errorData.meta?.code, errorData.meta?.message)
    }

    // GENERAL ERROR
    throw new Error('Something went wrong!')
  }
}

async function _post (url, data) {
  return await fetch(url, {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify(data)
  })
}

async function _put (url, data) {
  return await fetch(url, {
    method: 'PUT',
    headers: authHeader(),
    body: JSON.stringify(data)
  })
}

async function _putTos3 (url, data) {
  return await fetch(url, {
    method: 'PUT',
    body: data
  })
}

async function _get (url) {
  return await fetch(url, {
    headers: authHeader()
  })
}

async function _delete (url) {
  return await fetch(url, {
    method: 'DELETE',
    headers: authHeader()
  })
}

export async function postFetcher (url, data, isRaw = false) {
  const res = await _post(url, data)
  await _handleError(res)
  return isRaw ? res : res.json()
}

export async function putFetcher (url, data) {
  const res = await _put(url, data)
  await _handleError(res)
  return res.json()
}

export async function getFetcher (url, isRaw = false) {
  const res = await _get(url)
  await _handleError(res)
  return isRaw ? res : res.json()
}

export async function deleteFetcher (url, isRaw = true) {
  const res = await _delete(url)
  await _handleError(res)
  return isRaw ? res : res.json()
}

export async function putTos3Fetcher (url, data) {
  const res = await _putTos3(url, data)
  await _handleError(res)
  return res
}

export async function multipartPostFetcher (url, data, isRaw = false) {
  const res = await _multipartPost(url, data)
  await _handleError(res)
  return isRaw ? res : res.json()
}

async function _multipartPost (url, formData) {
  const header = authHeader()
  delete header['Content-Type']

  return await fetch(url, {
    method: 'POST',
    headers: header,
    body: formData
  })
}
