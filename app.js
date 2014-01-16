var express = require('express'),
    path = require('path');
    employees = require('./api/employee');
   
   
    
var app = express();
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/employees/:id/reports', employees.findByManager);
app.get('/api/employees/:id', employees.findById);
app.get('/api/employees', employees.findAll);


app.listen(3000);
console.log('Listening on port 3000...');