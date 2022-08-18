const express = require('express');
const lodash = require('lodash');
const abc = require('../introduction/intro')
const logg = require('../logger/loggers')
const help = require('../util/helper')
const valid = require('../validator/formatter')
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const Books_AuthorsController= require("../controllers/books_AuthorsController")
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

    // ***
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
    
    // ***
    router.get('/movies-list',function (req,res){
        let movies = ['The Shining','Titanic','Shutter Island','Pans Labyrinth','John Wick','Harry Potter','Pirates Of The Caribbean']
        res.send(movies)
    })

    router.get('/movies-list/:indexNumber',function (req,res){
        let movies = ['The Shining','Titanic','Shutter Island','Pans Labyrinth','John Wick','Harry Potter','Pirates Of The Caribbean']
        console.log(req.params.indexNumber)
        let movieIndex = req.params.indexNumber
        let requiredMovie = movies[movieIndex]
        res.send(requiredMovie)
    })

    router.get("/movies-list/:indexNumber",function (req,res){
        let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
        console.log(req.params.indexNumber)
        let movieIndex = req.params.indexNumber
        if (movieIndex<0 || movieIndex>=movies.length){
            return res.send('The index value is not correct,Pls check it')
        }
        let requiredMovie = movies[movieIndex]
        res.send(requiredMovie)
    })

    router.get("/films", function(req, res){
        const films = [ {
            "id": 1,
            "name": "The Shining"
           }, {
            "id": 2,
            "name": "Incendies"
           }, {
            "id": 3,
            "name": "Rang de Basanti"
           }, {
            "id": 4,
            "name": "Finding Nemo"
           }]
           res.send(films) 
    })

    router.get("/films/:filmId", function(req, res){
        const films = [ {
            "id": 1,
            "name": "The Shining"
           }, {
            "id": 2,
            "name": "Incendies"
           }, {
            "id": 3,
            "name": "Rang de Basanti"
           }, {
            "id": 4,
            "name": "Finding Nemo"
           }]
    
           let filmId = req.params.filmId
           console.log(filmId);
           for(let index = 0; index < films.length; index++){
               let film = films[index]
               if(film.id == filmId) {
                return res.send(film)
               }
           }
           res.send("The film id doesn't match any movie")
    })
    
    // ***
    router.get("/shoes", function(req, res){
        let queryParams = req.query
        let brand = queryParams.brand
        res.send("dummy response")
    })
    
    // uses query params
    router.get('/candidates', function(req, res){
        console.log('Query paramters for this request are '+JSON.stringify(req.query))
        let gender = req.query.gender
        let state = req.query.state
        let district = req.query.district
        console.log('State is '+state)
        console.log('Gender is '+gender)
        console.log('District is '+district)
        let candidates = ['Akash','Suman']
        res.send(candidates)
    })
    
    // use path param
    router.get('/candidates/:canidatesName', function(req, res){
        console.log('The request objects is '+ JSON.stringify(req.params))
        console.log('Candidates name is '+req.params.canidatesName)
        res.send('Done')
    })
    
    // ***
    router.get("/sol1", function (req, res) {
    
        let arr= [1,2,3,5,6,7]
      
        let total = 0;
        for (var i in arr) {
            total += arr[i];
        }
      
        let lastDigit= arr.pop()
        let consecutiveSum= lastDigit * (lastDigit+1) / 2
        let missingNumber= consecutiveSum - total
      
        res.send(  { data: missingNumber  }  );
      });
      
      router.get("/sol2", function (req, res) {
    
        let arr= [33, 34, 35, 37, 38]
        let len= arr.length
      
        let total = 0;
        for (var i in arr) {
            total += arr[i];
        }
      
        let firstDigit= arr[0]
        let lastDigit= arr.pop()
        let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
        let missingNumber= consecutiveSum - total
       
        res.send(  { data: missingNumber  }  );
      });

      // ***
      let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]
   router.post('/players', function (req, res) {
    
    let newPlayer = req.body
    let newPlayersName = newPlayer.name
    let isNameRepeated = false

    for(let i = 0; i < players.length; i++) {
        if(players[i].name == newPlayersName) {
            isNameRepeated = true;
            break;
        }
    }
    if (isNameRepeated) {
        res.send("This player was already added!")
    } else {
        players.push(newPlayer)
        res.send(players)
    }
});

// ***
    let person= [
        {
            name: "PK",
            age: 10,
            votingStatus: false
        },
        {
            name: "SK",
            age: 20,
            votingStatus: false
        },
        {
            name: "AA",
            age: 70,
            votingStatus: false
        },
        {
            name: "SC",
            age: 5,
            votingStatus: false
        },
        {
            name: "HO",
            age: 40,
            votingStatus: false
        },
    ]

    router.post("/getvotingstatus", function (req, res) {
        let VotingAge = req.query.age
        let ElegiblePerson = []
        for (let i = 0; i < person.length; i++)
        {
            if (person[i].age > VotingAge) {
                person[i].votingStatus = true;
                ElegiblePerson.push(person[i])
            }
        }
        res.send({ person: ElegiblePerson, status: true })
    })
    
      res.send('My second ever api!')
});

// ***
router.post("/createUser", UserController.createUser)

router.get("/getUsersData", UserController.getUsersData)

// ***
router.post("/newBook", UserController.newBook)

router.get("/bookList", UserController.bookList)

// ***
router.post("/createBook", BookController.createBook)
router.get("/allBookList", BookController.allBooksList)
router.post("/yearDetails", BookController.yearDetails)
router.post("/particularBooks", BookController.particularBooks)
router.post("/priceDetails", BookController.priceDetails)
router.post("/randomBooks", BookController.randomBooks)

// ***
router.post("/createBooks", Books_AuthorsController.createBooks)
router.post("/create_books", Books_AuthorsController.create_Books)
router.get("/listBooks", Books_AuthorsController.listBooks)
router.post("/updatebook", Books_AuthorsController.updatebook)
router.post("bookrange", Books_AuthorsController.bookrange)

// ***
router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason