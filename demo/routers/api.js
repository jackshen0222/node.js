const express = require('express');
const router = express.Router();
const User = require('../models/User');

//统一返回格式
let responseData;
router.use( function (req,res,next) {
       responseData = {
           code:0,
           message:''
       }
       next()
} )

/*
用户注册
   注册逻辑
     1.用户名不能为空
     2.密码不能为空
     3.两次密码不能相同

        1.用户名是否已经被注册
            数据库查询
 */

router.post('/user/register',(req,res)=>{
    var name = req.body.name
    var password = req.body.password
    var repassword = req.body.repassword

    if(name == ''){
        responseData.code = 1
        responseData.message = '用户名不能为空'
        res.json(responseData)
        return
    }

    if(password == ''){
        responseData.code = 2
        responseData.message = '密码不能为空'
        res.json(responseData)
        return
    }

    if(password != repassword){
        responseData.code = 3
        responseData.message = '两次密码输入不一致'
        res.json(responseData)
        return
    }

    User.findOne({
        username: name
    }).then(function ( userInfo ) {
         console.log(userInfo)
    })
    

    responseData.message = '注册成功'
    res.json(responseData)

})
module.exports = router