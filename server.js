/**
 *
 * title:server.js
 *
 * description:node.js创建服务器
 *
 * author: sunsichen
 *
 * time: 2017/9/5
 */

var http = require('http');

http.createServer(function (request, response) {

    //发送 HTTP 头部
    //HTTP 状态值 ：200 ：OK
    //内容类型：text/plain
    response.writeHead(200, {'Contnt-Type': 'text/plain'});

    //发送响应数据Hello World
    response.end("Hello World\n");
}).listen(3001);

//终端打印信息
console.log('Sever running at http://localhost:3001');