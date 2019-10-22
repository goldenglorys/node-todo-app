const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//Using promise with mongDB instead of callback functions
mongoose.Promise = global.Promise

//Connect to mongo DB. And Before MongoDB
// can save your new database, a collection name must also be specified at the time of creation
mongoose.connect("mongodb://localhost:27017/todoDB")

//Create a schema and (it's like a blueprint of our data)
let todoSchema = new mongoose.Schema({
    item: String
})
 
//Create a model which will be stored as a collection inside the DB
let Todo = mongoose.model("Todo", todoSchema)

let urlencodedParser = bodyParser.urlencoded({ extended: true})

module.exports = (app)=>{

    app.get('/todo', (req, res)=>{
        //Get data from mongoDb and pass to view
        Todo.find({}, (err, data)=>{
            if(err) throw err
            // console.log(data[0]._id)
            res.render('todo', {todos: data})
        })
    })

    app.get('/api', (req, res)=>{
        Todo.find({}, (err, data)=>{
            if(err) throw err
            res.json(data)
        })
    })

    app.post('/sendItem', urlencodedParser, (req, res)=>{
        console.log(req.body)
        //Get data from the view and add to mongoDB
        // let itemContainer = Todo(req.body)
        //     itemContainer.save().then(
        //         item => {
        //             console.log("Saved to database with a unique ID of: " + item._id)
        //             console.log(item.item)
        //             res.render('todo', {todos: item})
        //             }
        //         ).catch(
        //         err => {
        //             console.log("Unable to save to database" + err)
        //         }
        //     )
    })

    app.delete('/todoDel', (req, res)=>{
        console.log(req._parsedOriginalUrl.query)
    })

}