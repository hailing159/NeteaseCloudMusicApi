const { createServer } = require('http')
const app = require('../app')  

module.exports = (req, res) => {
  createServer(app.callback()).emit('request', req, res)
}
