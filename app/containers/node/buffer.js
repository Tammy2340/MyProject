/**
 *
 * title: buffer.js
 *
 * description: buffer缓冲区，可以让node.js处理二进制数据
 *
 * author: sunsichen
 *
 * time: 2017/9/7
 */

//创建Buffer类
buf = new Buffer(26);
for (var i=0;i<26;i++) {
    buf[i] = i+97;
}

console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf8',0,5));
console.log(buf.toString(undefined,0,5)); //使用'utf8'编码

//将buffer转换为JSON对象
var bufJson = new Buffer('www.runoob.com');
var json = bufJson.toJSON(bufJson);
console.log(json);

//缓冲区合并
var buffer1 = new Buffer('菜鸟教程');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = new Buffer.concat([buffer1, buffer2]);
console.log("buffer3内容:"+buffer3.toString());

//缓冲区比较
var buffer4 = new Buffer('ABC');
var buffer5 = new Buffer('ABCD');
var result = buffer4.compare(buffer5);

if (result<0){
    console.log(buffer4+"在"+buffer5+"之前");
}else if (result==0){
    console.log(buffer4+"与"+buffer5+"相同");
}else {
    console.log(buffer4+"在"+buffer5+"之后");
}

//拷贝缓冲区
var bufferOLd = new Buffer('ABC');
var bufferCopy = new Buffer(3);
bufferOLd.copy(bufferCopy);
console.log("bufferCopy content: "+bufferCopy.toString());


//缓冲区裁剪
var bufferCut = new Buffer('runoob');
var bufferCutDone = bufferCut.slice(0,2);
console.log("bufferCopyDone content: "+bufferCutDone.toString());


//缓冲区长度
console.log(buffer2.length);









