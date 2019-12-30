const app = getApp();

var token = app.globalData.token;

var baseUrl = 'http://127.0.0.1:3000'

function login (options) {
  options.url = baseUrl + options.url
  wx.request(options)
}

function reqToken(options) {
  options.url = baseUrl +options.url
  options.token = token
  wx.request(options)
}

module.exports = {
  login,
  reqToken
}