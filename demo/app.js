var express = require('express')
var swig = require('swig')
var mongodb = require('mongodb').MongoClient
var bodyParser = require('body-parser')
var app = express()

app.use( bodyParser.urlencoded({extended:true}))
app.use('/public',express.static(__dirname+'/public'))

app.engine('html',swig.renderFile)

app.set('views','./views')
app.set('view engine','html')
swig.setDefaults({cache:false})

app.use('/admin',require('./routers/admin'))
app.use('/api',require('./routers/api'))
app.use('/',require('./routers/main'))

const options = {useNewUrlParser: true}
mongodb.connect("mongodb://localhost:27017/admin",options,(err,db)=>{
    if(err) {
        console.log(err)
    }else {
        console.log('数据库连接成功')
        app.listen(8080)
    }

})

