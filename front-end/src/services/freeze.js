import request from '../utils/request'

export function fetch(data) {
  return request('/api/freeze/page', { data })
}