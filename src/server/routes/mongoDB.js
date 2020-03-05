const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
var Grid = require('gridfs-stream');
const crypto = require("crypto");

// DB
const mongoURI = 'mongodb+srv://maeng2418:!groovy365@campusdeal-kk1sm.mongodb.net/test?retryWrites=true&w=majority';

// // connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// // init gfs
let gfs;
var conn = mongoose.connection;
conn.once("open", () => {
	// init stream
	gfs = new mongoose.mongo.GridFSBucket(conn.db, {
	  bucketName: "uploads"
	});
  });

// Create storage engine
const storage = new GridFsStorage({
	url: mongoURI,
	file: (req, file) => {
	  return new Promise((resolve, reject) => {
		crypto.randomBytes(16, (err, buf) => {
		  if (err) {
			return reject(err)
		  }
		  const filename = file.originalname
		  const fileInfo = {
			filename: filename,
			bucketName: 'uploads',
		  }
		  resolve(fileInfo)
		})
	  })
	},
  })
  
const upload = multer({ storage })

const Schema = mongoose.Schema;

var Book = new Schema({
	uid: String,
	bookName: String,
	author: String,
	publisher: String,
	publishDate: String,
	category: String,
	price: Number,
	condition: String,
	method: Array,
	image: String,
	date: Date
});

var bookModel = mongoose.model('Book', Book);

router.get('/books', function (req, res, next) {
	bookModel.find({}, function (err, data) {
		res.json(data);
	});
});

router.get("/api/books/:filename", (req, res) => {
	// console.log('id', req.params.id)
	const file = gfs
	  .find({
		filename: req.params.filename
	  })
	  .toArray((err, files) => {
		if (!files || files.length === 0) {
		  return res.status(404).json({
			err: "no files exist"
		  });
		}
		gfs.openDownloadStreamByName(req.params.filename).pipe(res);
	  });
  });

router.post('/api/register', upload.single("image"), function (req, res, next) {
	var uid = req.body.uid;
	var bookName = req.body.bookName;
	var author = req.body.author;
	var publisher = req.body.publisher;
	var publishDate = req.body.publishDate;
	var category = req.body.category;
	var condition = req.body.condition;
	var price = req.body.price;
	var method = req.body.method;
	var image = req.file.filename;
	var date = Date.now();

	var book = new bookModel();

	book.uid = uid;
	book.bookName = bookName;
	book.author = author;
	book.publisher = publisher;
	book.publishDate = publishDate;
	book.category = category;
	book.condition = condition;
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
