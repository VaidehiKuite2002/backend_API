const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://vaidehi:123@cluster0.4aztqa2.mongodb.net/?retryWrites=true&w=majority")
.then(()=> console.log('Connected successfully'))
.catch((err)=> {console.log(err);});

const employeeController = require('./app/controllers/employeeController')
const express = require('express');
const app = express();

app.use('/employee',employeeController);
app.listen(8080);