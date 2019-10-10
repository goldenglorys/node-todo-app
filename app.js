const express = require('express')
const mongoose = require('mongoose')

let todoController = require('./controllers/todoController')

let app = express()

//set up template engine
app.set('view engine', 'ejs')

//start todo controller
todoController(app)

//serving static fike
app.use(express.static('public'))

//listen to port 
app.listen(3000)
console.log('You are listening to port 3000')