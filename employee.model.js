const mongoose = require('mongoose');
var employeeSchema =new mongoose.Schema({
    name:{
        type:String
    },
    add:{
        type:String
    }
    
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;