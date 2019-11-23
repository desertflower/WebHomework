var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  port: '3307',
  user: "root",
  password: "12345",
  database: "example_db"
});

function getEventsForPeriod(start, end, callback) {
  var sql = "SELECT event_date.Date, event.Name, event.Type, Location.Name AS Location_name"
      + " FROM event_date, event, location"
      +
      " WHERE event_date.Event_id = event.id and event.Location_id = Location.id"
      + " and event_date.Date >= ? and event_date.Date <= ?"
      //+ " GROUP BY Name"
      + " ORDER BY event_date.Date";

  con.query(sql, [start, end], callback);
}

function getLocationInfo(name, callback) {
  var sql = "SELECT * FROM example_db.location WHERE Name = ?";
  con.query(sql, [name], callback);
}

function createLocation({Location_name, Street_address, City, Zip, Country}, callback) {
  if (!Location_name) {
    callback();
    return;
  }
  var sql = 'insert into location (Name, Street_address, City, Zip, Country) values (?, ?, ?, ?, ?);';
  con.query(sql, [Location_name, Street_address, City, Zip, Country], callback);
}

function createEvent({Name, Type, Location_Id}, callback) {
  var sql = 'insert into event (Name, Type, Location_id) values (?, ?, ?);'
  con.query(sql, [Name, Type, Location_Id], callback);
}

function createEventDate({Event_Id, Date}, callback) {
  var sql = 'insert into event_date (Date, Event_Id) values (?, ?);';
  con.query(sql, [Date, Event_Id], callback);
}

module.exports = {
  getEventsForPeriod,
  getLocationInfo,
  createEvent,
  createEventDate,
  createLocation
}