var express = require('express');

var app = express();
var bodyParser = require('body-parser')
const routes = require('./js/routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // for reading JSON
app.set("view engine","ejs");
app.use('/', routes);

var server = app.listen(8081, "127.0.0.1", function () {
  var host = server.address().address
  var port = server.address().port

  console.log(server.address())
  console.log(port)

  console.log("Example app listening at http://%s:%s", host, port)
})