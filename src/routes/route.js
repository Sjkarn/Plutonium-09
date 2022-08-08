const express = require('express');
const lodash = require('lodash');
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

    const arr = ["January","Febuary","March","April","May","June","July","August","September","Octuber","November","December"]
    let result1 = lodash.chunk(arr,[size=4]);
    console.log(result1)

    const getOdd = [3,5,7,9,11,13,15,17,19,21]
    let findOdd = lodash.tail(getOdd);
    console.log(findOdd)

    const arr1 = [1,4,7,8]
    const arr2 = [5,3,4,6]
    const arr3 = [1,2,9,5]
    const arr4 = [7,1,12,31]
    let newArr = lodash.union(arr1,arr2,arr3,arr4);
    console.log(newArr)

    const array = [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']];
    let arrToObj = lodash.fromPairs(array);
    console.log(arrToObj)

    res.send('My second ever api!')
});

router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason