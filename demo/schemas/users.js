var mongoose = require('mongoose')

module.exports = new mongoose.Schema({
    username: String,//用户名
    password: String//密码
})