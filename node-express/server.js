var express = require('express');
const url = require('url');
var app = express();

app.set("view engine","ejs");

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: '3307',
  user: "root",
  password: "12345",
  database: "example_db"
});

function getEventsForPeriod(start, end, callback) {
  var sql = "SELECT event_date.Date, event.Name, event.Type,Location.location_name"
      + " FROM event_date, event, location"
      +
      " WHERE event_date.Event_id = event.Event_id and event.location_Location_id = Location.Location_id"
      + " and event_date.Date >= ? and event_date.Date <= ?"
      + " GROUP BY Name"
      + " ORDER BY event_date.Date";

  con.query(sql, [start, end], callback);
}

app.get('/', function (req, res) {
  var q = url.parse(req.url, true).query;
  var startDate = q.start || '2019-01-01';
  var endDate = q.end || '2020-01-01';

  getEventsForPeriod(startDate, endDate, function(err, events) {
    if (err) {
      res.send(err);
      return;
    }
    console.log(events);
    res.render('pages/index', {
      events,
      startDate,
      endDate
    });
  })
})

var server = app.listen(8081, "127.0.0.1", function () {
  var host = server.address().address
  var port = server.address().port

  console.log(server.address())
  console.log(port)

  console.log("Example app listening at http://%s:%s", host, port)
})