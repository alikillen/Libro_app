const express = require('express')
var exphbs = require('express-handlebars');
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const bookRouter = require("./routes/book_routes")
const api_helper = require('./API_helper')
const Book = require("./models/book.js")
// import {v4 as uuidv4} from 'uuid'

const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const dbConn = process.env.MONGODB_URI || "mongodb://localhost/libro_app"
// when we need to deploy:
// if(process.env.NODE_ENV !== "production"){
//   require("dotenv").config();
// }
mongoose.connect(
	dbConn,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	},
	err => {
		if (err) {
			console.log("Error connecting to database", err)
		} else {
			console.log("Connected to database!")
		}
	}
)

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render("home");
})

app.get("/search", (req, res)=>{
	res.render("search")
})

app.get("/register", (req,res)=> {
	res.render("register")
})

app.post("/books/addBook", (req, res) => {
  var addedBook = {
		title: req.body.title,
		author: req.body.title,
		category: req.body.title,
		published_year: req.body.published_year
	}
	new Book(addedBook).save()
	res.redirect("/")
})

// app.get("/books", (req, res)=> {
// 	res.render("books")
// })

app.get("/login", (req, res)=>{
	res.render("login")
})

app.get("/books/addBook", (req, res)=>{
	res.render("addBook")
})



// app.get('/getAPIResponse', (req, res) => {
// 	api_helper.make_API_call('https://jsonplaceholder.typicode.com/todos/1')
// 	.then(response => {
// 			res.json(response)
// 	})
// 	.catch(error => {
// 			res.send(error)
// 	})
// })

app.use("/books", bookRouter)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})