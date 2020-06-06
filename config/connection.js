var mysql = require('mysql');
var connection;


if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host     : 'qf5dic2wzyjf1x5x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user     : 'l9xb0lebcu01swyj',
    password : 'dx2xi7wyzvodt1pk', 
    database : 'fhzvhxksgzj5pszs' 
  });
}

connection.connect();

module.exports = connection;