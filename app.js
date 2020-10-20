const express = require('express')
var exphbs  = require('express-handlebars');
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const bookRouter = require("./routes/book_routes")
const api_helper = require('./API_helper')
// import {v4 as uuidv4} from 'uuid'

const port = 3000

app.use(cors())
app.use(bodyParser.json())

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

app.get("/search", (req,res)=>{
	api_helper.make_API_call('https://jsonplaceholder.typicode.com/todos/1')
	.then(response => {
			res.json(response)
	})
	.catch(error => {
			res.send(error)
	})
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