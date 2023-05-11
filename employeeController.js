const express =  require('express');
const Employee = require('../models/employee.model');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var router = express.Router();


router.post('/create',jsonParser,(req,res)=>{
    Employee.create(req.body);
    res.status(201).json({
        status:"success"
    })
})
module.exports = router;