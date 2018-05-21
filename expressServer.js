const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/'));
//Store all HTML files in view folder.

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/owners',(req, res) => {
  res.sendFile('/owners/index.html');
});

app.get('/investors',(req, res) => {
  res.sendFile('/investors/index.html');
});

app.get('/cookies',(req, res) => {
  res.sendFile('/cookies/index.html');
});

app.get('/privacy',(req, res) => {
  res.sendFile('/privacy/index.html');
});

app.get('/rules',(req, res) => {
  res.sendFile('/rules/index.html');
});

app.get('/tos',(req, res) => {
  res.sendFile('/tos/index.html');
});

app.listen(3000);

console.log('Running at Port 3000');