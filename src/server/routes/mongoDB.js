const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require("multer");
const upload = multer({ dest: 'uploads/', limits: { fileSize: 5 * 1024 * 1024 } });

mongoose.connect('mongodb+srv://maeng2418:!groovy365@campusdeal-kk1sm.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

const Schema = mongoose.Schema;

var Book = new Schema({
	uid: String,
	bookName: String,
    author: String,
    publisher: String,
	publishDate: String,
	category: String,
	price: Number,
	method: Array,
	// image: {data:Butter, contentsType: String},
	date: Date
});

var bookModel = mongoose.model('Book', Book);

router.get('/books', function(req, res, next) {
    bookModel.find({}, function(err,data){
        res.json(data);
    });
});

router.post('/api/register', upload.single('image'), function(req, res, next) {
	var uid = req.body.uid;
	var bookName = req.body.bookName;
	var	author = req.body.author;
	var publisher = req.body.publisher;
	var publishDate = req.body.publishDate;
	var category = req.body.category;
	var price = req.body.price;
	var method = req.body.method;
	var image = req.file;
	var date = Date.now();

	var book = new bookModel();
	
	book.uid = uid;
	book.bookName = bookName;
	book.author = author;
	book.publisher = publisher;
	book.publishDate = publishDate;
	book.category = category;
	book.price = price;
	book.method = method;
	book.image = image;
	book.date = date;
	
	book.save(function (err) {
		if (err) {
			throw err;
		}
		else {
			console.log("complete");
		}
	});
});


module.exports = router;
