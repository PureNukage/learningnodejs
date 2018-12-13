const express = require('express');
const app = express();

var port = 3000;

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('index', {
		title: "Homepage",
		stuff: "hi"
	});
});

app.get('/contact', function(req, res){
	res.sendFile(__dirname + '/contact.html');
});

/*
app.get('/profile/:name', function(req, res){
	var data = {age: 29, job: 'ninja', hobby: ['eating', 'fighting', 'fishing']};
	res.render('profile', {person: req.params.name, data: data});
});
*/

const server = app.listen(port, () =>{
	console.log(`Now listening on port ${port}`);
});