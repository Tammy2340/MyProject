/**
 *
 * title:
 *
 * description: 测试闭包的值
 *
 * author: sunsichen
 *
 * time: 2017/9/7
 */

function f1() {
    var n = 999;
    nAdd = function () {
        n+=1;
    }
    
    function f2() {
        console.log(n);
    }
    return f2;
}

var result = f1();
result();
nAdd();
result();



