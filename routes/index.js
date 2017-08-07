var express = require('express');
var router = express.Router();
var fs = require('fs');

var userData = [];
userData.push({ username: "lihjj", comment: '我是第一给评论的' });
userData.push({ username: "sfdsgdg", comment: '我是第二个评论的' });
userData.push({ username: "_ertetrfg", comment: '我是第三个评论的' });
userData.push({ username: "_dgdf", comment: '我是第四个评论的' });
userData.push({ username: "dfdhgfhd", comment: '我是第五个评论的' });


var userinfo = [
    {
        username: 'admin',
        password: '000000'
    }
];
/* GET home page. */
router.get('/', function (req, res, next) {

    // 如果请求中的 cookie 存在 isVisit, 则输出 cookie
    // 否则，设置 cookie 字段 isVisit, 并设置过期时间为10分钟
    if (req.cookies.isVisit) {
        console.log(req.cookies);
        var username = req.query.username || '';
        res.render('index', { title: '论坛主页', userData: userData, username: username });
    } else {
        res.cookie('isVisit', 10, { maxAge: 60 * 1000 });
        res.render('index', { title: '主页', userData: userData, username: '' });
    }
})

router.post('/', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    if (req.body.id == 1) {
        //注册
        var flag = 0;
        for (var i = 0; i < userinfo.length; i++) {
            if (userinfo[i].username != username) {
                flag = 1;
                userinfo.push({
                    username: username,
                    password: password,
                })
                break;
            }
        }
        if (1 === flag) {
            res.end('OK');
        }
        else {
            res.end('该用户已存在');
        }
    }
    else if (req.body.id == 2) {
        //登录
        var flag = 0;
        for (var i = 0; i < userinfo.length; i++) {
            if (userinfo[i].username === username && userinfo[i].password === password) {
                flag = 1;
                break;
            }
        }
        if (flag == 1) res.end('OK');
        else res.end('该用户不存在');
    }
    else if (req.body.id == 3) {
        //添加评论
        userinfo.push({
            username:username,
            comment:req.body.comment,
        })
    }
})


module.exports = router;
