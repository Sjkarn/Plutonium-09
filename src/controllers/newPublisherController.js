const newPublisherModel= require("../models/newPublisherModel")

const create_Books= async function (req, res) {
    let book = req.body
    let bookCreated = await newPublisherModel.create(book)
    res.send({data: bookCreated})
}

module.exports.create_Books = create_Books