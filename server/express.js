var express = require('express');
var path = require('path');
var app = express();

app.disable('x-powered-by');

app.use(express.static(__dirname, 'public'));
app.use(express.static(__dirname, 'files'));

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public'));
        });

app.listen(app.get('port'), function() {
    console.log('Express started press Ctrl-C to terminate');
})