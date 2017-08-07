var express = require('express');
var router = express.Router();
var fs = require('fs');

var userData = [];
userData.push({username:"lihjj",comment:'我是第一给评论的'});
userData.push({username:"sfdsgdg",comment:'我是第二个评论的'});
userData.push({username:"_ertetrfg",comment:'我是第三个评论的'});
userData.push({username:"_dgdf",comment:'我是第四个评论的'});
userData.push({username:"dfdhgfhd",comment:'我是第五个评论的'});

router.post('/', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    console.log(req.body);
    if (username == 'sis' && password == '1') {
        res.send('1');
    }
    res.end('OK');
})
router.get('/', function (req, res, next) {
        var username = req.query.username;
        var password = req.query.password;
        console.log('sdf');
        res.render('register', { username: 'username',userData:userData })
})

module.exports = router;