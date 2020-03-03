const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://maeng2418:!groovy365@campusdeal-kk1sm.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

const Schema = mongoose.Schema;

var Book = new Schema({
	author: String,
    book: String,
    // field: String,
	publisher: String,
	condition: String,
	price: String,
	image: String,
	date: Date
});

var bookModel = mongoose.model('Post', Book);

router.get('/books', function(req, res, next) {
    bookModel.find({}, function(err,data){
        res.json(data);
    });
});

router.post('/register', function(req, res, next) {
	var	author = req.body.author;
	var book = req.body.book_title;
	var publisher = req.body.publisher;
	var condition = req.body.condition;
	var price = req.body.price;
	var image = req.body.img_data;
	var date = Date.now();
	
	var post = new postModel();
	
	post.author = author;
	post.book = book;
	post.publisher = publisher;
	post.condition = condition;
	post.price = price;
	post.image = image;
	post.date = date;
	
	post.save(function (err) {
		if (err) {
			throw err;
		}
		else {
			res.redirect('/complete');
		}
	});
});


module.exports = router;
