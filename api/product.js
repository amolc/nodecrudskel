var http = require('http');
var mysql = require('mysql');
var connection = mysql.createConnection({
  database: 'gnossem',
  user : 'root',
  password : 'root',
  port : '8889'
});
    
    connection.connect(function(err){
        if(err != null) {
        	console.log ('Err' +err);
        }
    });

exports.findAll = function(req, res) {
	connection.query("SELECT * from gnossem.jos_vm_product order by product_id", function(err, rows){
	res.jsonp(rows);		
	});
}
	

