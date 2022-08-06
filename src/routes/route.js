const express = require('express');
const abc = require('../introduction/intro')
const logg = require('../logger/loggers')
const help = require('../util/helper')
const valid = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    // Problem 1
    console.log('My batch is', logg.name)
    // Problem 2
    console.log(help.abc)
    console.log(help.xyz)
    console.log(help.data)
    // Problem 3
    console.log(valid.space)
    console.log(valid.tab)
    console.log(valid.lower)
    console.log(valid.upper)
    // logg.printName()
    // abc.printName()
    res.send('My second ever api!')
});

router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason