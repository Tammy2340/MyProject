/**
 *
 * title:
 *
 * description: 通过 connection（连接）事件演示了 EventEmitter 类的应用。
 *
 * author: sunsichen
 *
 * time: 2017/9/6
 */
var events = require('events');
var eventEmitter =new events.EventEmitter();

//监听器 #1
var listener1 = function  listener1() {
    console.log("监听器 listener1 执行。");
};

//监听器 #2
var listener2 = function  listener1() {
    console.log("监听器 listener2 执行。");
};

//绑定 connection 事件，处理函数为 listener1
eventEmitter.addListener('connection', listener1);

//绑定 connection 事件，处理函数为 listener2
eventEmitter.addListener('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " 个监听器监听连续事件。");

//处理 connection 事件
eventEmitter.emit('connection');

//移除绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");

//触发连续事件
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connecton');
console.log(eventListeners + " 个监听器监听连续事件。");

console.log("程序执行完毕。");