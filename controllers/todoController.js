const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//Connect to mongod DB
// mongoose.connect("mongodb://localhost:27017/newDateBase")

// //Create a schema
// let todoSchema = new mongoose.Schema({
//     item: String
// })
// //Create a model which will be stored as a collection inside the DB
// let Todo = mongoose.model("Todo", todoSchema)

// let item1 = Todo({item: 'mongo no sql item'}).save((err)=>{
//     if(err) throw err
//     console.log("Item saved!")
// })


let dummyData = [{item: 'juche'}, {item: 'xi thought'}, {item: 'mao tought'}]
let urlencodedParser = bodyParser.urlencoded({ extended: true})

module.exports = (app)=>{

    app.get('/todo', (req, res)=>{

        //get data from mongoDb and pass to view
        // Todo.find({}, (err, data)=>{
        //     if(err) throw err
        //     res.render('todo', {todos: data})
        // })

        res.render('todo', {todos: dummyData})
    })

    app.post('/todo', urlencodedParser, (req, res)=>{

        //get data from the view and add to mongoDB
        // let newTodo = Todo(re.body).save((err)=>{
        //     if(err) throw err
        //     console.log("Saved!")
        // })

        console.log(req.body)
        dummyData.push(req.body)
        console.log(dummyData)
    })

    app.delete('/todo', (req, res)=>{

    })

}