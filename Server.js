//rooter
/*var express = require('express');
var bodyParser = require('body-parser');
var Rooter = require('./Rooter').router;
var cors = require('cors')
 
//instance serveur
var server = express();


//body Parser config()
server.use(bodyParser.json());
server.use(cors())
server.use(function(req, res, next) {
	console.log(req);  
    res.header('Access-Control-Allow-Origin', "http://localhost:8000");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", 'GET')
    res.header("Access-Control-Allow-Credentials", "true")
    next();
});
*/
var express = require("express");
var bodyParser = require("body-parser");
var Rooter = require("./Rooter").router;
var cors = require("cors");

var server = express();

server.use(
  cors(),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json()
);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use("/api/", Rooter);

server.listen(8080, function() {
  console.log("Demarrage du serveur ...");
});



server.use('/api/',Rooter);

//lancement du serveur
server.listen(8000,function(){
	console.log('Server is running')
});