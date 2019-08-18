import request from '@/utils/request'

export function login(data) {
  // return request({
  //   url: '/user/login',
  //   method: 'post',
  //   data
  // })
  return new Promise(function() {
    return 1
  })
}

export function getInfo(token) {
  // return request({
  //   url: '/user/info',
  //   method: 'get',
  //   params: { token }
  // })
  return new Promise(function() {
    return 1
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
