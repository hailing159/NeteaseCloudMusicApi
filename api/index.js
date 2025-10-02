
const serverless = require('serverless-http');
const app = require('../app'); // 引入你刚才修改并导出的 express app

module.exports = serverless(app);
