const bodyParser = require('body-parser')

let dummyData = [{item: 'juche'}, {item: 'xi thought'}, {item: 'mao tought'}]
let urlencodedParser = bodyParser.urlencoded({ extended: true})

module.exports = (app)=>{

    app.get('/todo', (req, res)=>{
        res.render('todo', {todos: dummyData})
    })

    app.post('/todo', urlencodedParser, (req, res)=>{
        console.log(req.body)
        dummyData.push(req.body)
        console.log(dummyData)
    })

    app.delete('/todo', (req, res)=>{

    })

}