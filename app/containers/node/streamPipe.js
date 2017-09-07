/**
 *
 * title: streamPipe.js
 *
 * description: 管道流，通过读取一个文件内容并将内容写入到另外一个文件中。
 *
 * author: sunsichen
 *
 * time: 2017/9/7
 */

var fs = require('fs');

//创建一个可读流
var readStream = fs.createReadStream('input.txt');

//创建一个可写流
var writeStream = fs.createWriteStream('output.txt');

//管道读写操作
//读取 input.txt 文件内容，并将内容写入到output.txt文件中
readStream.pipe(writeStream);
console.log("程序执行完毕");