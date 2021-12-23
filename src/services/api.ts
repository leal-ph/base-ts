/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { AxiosRequestConfig } from "axios"

function call({ method, url, data, ...config }: AxiosRequestConfig) {
  return axios({ method, url, data, ...config })
    .then((resp) => {
      return { data: resp.data, status: resp.status, message: resp.statusText }
    })
    .catch((error) => {
      return { data: undefined, status: error.response.status, message: error.toString() }
    })
}

export function get(url: string, config?: AxiosRequestConfig) {
  return call({ method: "get", url, ...config })
}

export function del(url: string, config?: AxiosRequestConfig) {
  return call({ method: "delete", url, ...config })
}

export function post(url: string, data?: any, config?: AxiosRequestConfig) {
  return call({ method: "post", url, data, ...config })
}

export function put(url: string, data?: any, config?: AxiosRequestConfig) {
  return call({ method: "put", url, data, ...config })
}

export function patch(url: string, data?: any, config?: AxiosRequestConfig) {
  return call({ method: "patch", url, data, ...config })
}
