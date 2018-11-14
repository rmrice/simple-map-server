const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const port = 8888;

const showdown = require('showdown');
const converter = new showdown.Converter();

app.get('/', (req, res) => {
    fs.readFile(__dirname + '/index.md', 'utf-8', (err, data) => {
      if (err) throw err;
      res.send(converter.makeHtml(data));
    })
});

app.get('/earthquakes', (req, res) => {
    res.sendFile(path.join(__dirname + '/examples/earthquakes.html'));
})

app.listen(port, () => console.log('Server started. Go to localhost:8888 in your browser'));
