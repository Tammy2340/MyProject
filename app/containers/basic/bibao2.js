/**
 *
 * title:
 *
 * description:
 *
 * author: sunsichen
 *
 * time: 2017/9/7
 */

var name = "The window";

var object1 = {
    name: "My Object1",
    getNameFunc1: function () {
        return function () {
            return this.name;
        };
    }
};
console.log(object1.getNameFunc1()());

var object2 = {
    name: "My Object2",
    getNameFunc2: function () {
        var that = this;
        return function () {
            return that.name;
        };
    }
};
console.log(object2.getNameFunc2()());

function foo(x) {
    var tmp = 3;
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var bar = foo(2); // bar 现在是一个闭包
bar(10);

function foo1(x) {
    var tmp = 3;
    return function (y) {
        console.log(x + y + tmp);
        x.memb = x.memb ? x.memb + 1 : 1;
        console.log(x.memb);
    }
}
var age = new Number(2);
var bar1 = foo1(age); // bar 现在是一个引用了age的闭包
bar1(10);


var db = (function () {
    // 创建一个隐藏的object, 这个object持有一些数据
    // 从外部是不能访问这个object的
    var data = {};
    // 创建一个函数, 这个函数提供一些访问data的数据的方法
    return function (key, val) {
        if (val===undefined){
            return data[key];
        }else {
            return data[key] = val;
        }
    }
    // 我们可以调用这个匿名方法
    // 返回这个内部函数，它是一个闭包
})();
console.log(db('x'));
console.log(db('x', 1));
console.log(db('x'));

