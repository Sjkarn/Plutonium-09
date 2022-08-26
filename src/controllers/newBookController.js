const newBookModel= require("../models/newBookModel")
const NewAuthorModel= require("../models/newAuthorModel")
const NewPublisherModel= require("../models/newPublisherModel")

const creatingBooks= async function (req, res) {
    let book = req.body
    let bookCreated = await newBookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksWithAuthorAndPublisherDetails = async function (req, res) {
    let specificBook = await newBookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook})
}

module.exports.creatingBooks = creatingBooks
module.exports.getBooksWithAuthorAndPublisherDetails = getBooksWithAuthorAndPublisherDetails