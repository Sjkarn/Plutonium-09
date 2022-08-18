const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

// ***
const newBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

// find({field: value}).limit(n); = bring first n matched docs
// find({field: value}).skip(n); = skip first n matched docs, then bring the remaining;

//pagination: per/page = 5docs
// suppose there are 100 matched docs;
/*
1st page = 1st to 5th;
2nd page = 6th to 10th;
3rd page = 11th to 15th;

abcmodel.find({field: value}).skip((4-1)*5).limit(5); => 16th - 20th docs
abcmodel.find({field: value}).skip((4-1)*5) => 16th to 100th
abcmodel.find({field: value}).skip((pages-1)*l).limit(l);

*/



module.exports.createUser= createUser
module.exports.getUsersData= getUsersData

// ***
module.exports.newBook= newBook
module.exports.bookList= bookList