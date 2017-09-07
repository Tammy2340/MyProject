/**
 *
 * title: streamZlib.js
 *
 * description: 用管道和链式来压缩和解压文件。
 *
 * author: sunsichen
 *
 * time: 2017/9/7
 */

var fs = require('fs');
var zlib = require('zlib');

//压缩input.txt文件为input.txt.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log("文件压缩完成。");

//解压 input.txt.gz文件为 input.txt
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));

console.log("文件解压完成。");
