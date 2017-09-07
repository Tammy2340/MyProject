/**
 *
 * title: event.js
 *
 * description: 事件驱动程序，可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件
 *
 * author: sunsichen
 *
 * time: 2017/9/6
 */

//引入 events 模块
var events = require('events');

//创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

//创建事件处理程序
var connectHandler = function connected () {
    console.log("连接成功");

    //触发 data_recieved 事件cd
    eventEmitter.emit('data_received');
}

//绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);

//使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function () {
    console.log("数据连接成功。");
});

//触发 connection 事件
eventEmitter.emit('connection');

console.log("程序执行完毕。");
