const express = require('express');
const app = express();

var port = 3000;

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
	res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function(req, res){
	var data = {age: 29, job: 'ninja', hobby: ['eating', 'fighting', 'fishing']};
	res.render('profile', {person: req.params.name, data: data});
});

app.listen(port, () =>{
	console.log(`Now listening on port ${port}`);
});