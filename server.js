const express = require('express');


var app = express();
var port = process.env.PORT || 2222;

app.use(express.static(__dirname + '/files'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

var d = new Date();
app.listen(port, () => {
    console.log(`Server Started on ${port}  --${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
});