var express = require('express')
var router = express.Router()

router.get('/user',(req,res)=>{
    res.send('User')

})


module.exports = router