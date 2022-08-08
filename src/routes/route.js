const express = require('express');
const lodash = require('lodash')
const abc = require('../introduction/intro')
const logg = require('../logger/loggers')
const help = require('../util/helper')
const valid = require('../validator/formatter')
const lod = require('../lodash/lodash.js')
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
    console.log(lod.myLodash)
    logg.printName()
    abc.printName()

    res.send('My second ever api!')
});

router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

    router.get('/students', function (req, res){
        let students = ['Sabiha', 'Neha', 'Akash']
        res.send(students)
    })
    
    router.get('/student-details/:name', function(req, res){
        /*
        params is an attribute inside request that contains 
        dynamic values.
        This value comes from the request url in the form of an 
        object where key is the variable defined in code 
        and value is what is sent in the request
        */
    
        let requestParams = req.params
    
        // JSON strigify function helps to print an entire object
        // We can use any ways to print an object in Javascript, JSON stringify is one of them
        console.log("This is the request "+ JSON.stringify(requestParams))
        let studentName = requestParams.name
        console.log('Name of the student is ', studentName)

        res.send('Dummy response')
})
module.exports = router;
// adding this comment for no reason