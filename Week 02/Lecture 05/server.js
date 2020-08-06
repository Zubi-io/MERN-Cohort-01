const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))

var db;

MongoClient.connect('mongodb://127.0.0.1:27017/star_wars',{
    useUnifiedTopology: true
  }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
    db = client.db();
})

// MongoClient.connect('mongodb://127.0.0.1:27017/star_wars', { useUnifiedTopology: true })
//   .then(client => {
//     console.log('Connected to Database')
//   })
//   .catch(error => console.error(error))

app.get('/',(req, res) => {
    // res.send('Hello World');
    const cursor = db.collection('quotes').find().toArray()
        .then(results => {
            // console.log(results);
            res.render('index.ejs',{quotes: results})
        })
    // res.sendFile(__dirname + '/index.html')   
    // res.render('index.ejs',{})
})

app.post('/quotes', (req, res) => {
    const quotesCollection = db.collection('quotes')
    quotesCollection.insertOne(req.body)
    .then(result => {
    //   console.log(result)
        res.redirect('/')
    })
    .catch(error => console.error(error))
})

app.listen(3000,() => {
    console.log('Listening on port 3000');
})