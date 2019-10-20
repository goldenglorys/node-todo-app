const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

let todoController = require('./controllers/todoController')

let app = express()

//set up template engine
app.set('view engine', 'ejs')

// //CORS (cross origin requests) enabling 
app.use(cors())

//start todo controller
todoController(app)

//serving static fike
app.use(express.static('public'))

//listen to port 
app.listen(3000)
console.log('You are listening to port 3000')