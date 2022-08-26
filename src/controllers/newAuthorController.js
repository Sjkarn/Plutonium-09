const newAuthorModel= require("../models/newAuthorModel")

const createBooks= async function (req, res) {
    let book = req.body
    let bookCreated = await newAuthorModel.create(book)
    res.send({data: bookCreated})
}

module.exports.createBooks = createBooks