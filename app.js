const express = require('express');
const app = express();
const http = require('http');

var port = 3000;

 app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
 });

/*
const server = http.createServer((req, res) => {
	res.
});
*/

app.listen(port, () => {
	console.log(`listening on port: ${port}`);
});