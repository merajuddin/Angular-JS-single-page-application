var express = require("express");
var app = express();
app.use(express.static('App'));
app.listen(3000, function(){
	console.log('App is running on port 3000');
});