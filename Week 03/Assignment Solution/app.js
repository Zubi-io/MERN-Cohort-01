const express = require('express');
const users = require('./Routes/users');
const students = require('./Routes/students');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Students', { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB Connection error:'));

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.json({"tutorial": "Build Rest APIs for Student Database"})
})

app.use('/users', users);

app.use('/students', validateUser, students)

function validateUser(req, res, next) {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const data = jwt.verify(token, process.env.JWT_KEY)
        if(!data) {
            throw new Error()
        }
        next()
    } catch (error) {
        res.status(401).send({error: 'Not authorized to access this resource'})
    }
}

app.listen(port, () => {
    console.log("Server listening on port " + port);
})