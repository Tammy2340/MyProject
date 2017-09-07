/**
 *
 * title: streamOpen.js
 *
 * description: 流，一个抽象接口。Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。
 *
 * author: sunsichen
 *
 * time: 2017/9/7
 */

/*从流中读取数据*/
var fs = require("fs");
var data = '';

//创建可读流
var readerStream = fs.createReadStream('input.txt');

//设置编码为utf8
readerStream.setEncoding('UTF8');

//处理流事件 --> data,end,and error
readerStream.on('data', function (chunk) {
    data += chunk;
});
readerStream.on('end', function () {
    console.log(data);
});
readerStream.on('error', function (err) {
    console.log(err.stack);
});
console.log("程序执行完毕");


