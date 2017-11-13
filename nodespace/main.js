//var fs = require("fs");
//
//fs.readFile('input.txt', function (err, data) {
//    if (err) return console.error(err);
//    console.log(data.toString());
//});
//
//console.log("结束");

//var hello = require('./hello');
//hello.world();

//var Hello = require('./hello');
//var hello = new Hello();
//hello.setName('BYVoid');
//hello.sayHello();

//console.info("程序开始执行：");
//
//var counter = 10;
//console.log("计数: %d", counter);
//
//console.time("获取数据");
////
//// 执行一些代码
////
//console.timeEnd('获取数据');
//
//console.info("程序执行完毕。")

var http = require('http');
var querystring = require('querystring');

var postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

