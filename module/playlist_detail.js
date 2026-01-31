// 歌单详情

module.exports = (query, request) => {
  const data = {
    id: query.id,
    n: 100000,
    s: query.s || -1,
  }
  return request('POST', `https://music.163.com/api/v6/playlist/detail`, data, {
    crypto: 'api',
    cookie: query.cookie,
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
