const express = require('express');
const url = require('url');
const router = express.Router();
const {
  getEventsForPeriod,
  getLocationInfo,
  createEvent,
  createEventDate,
  createLocation
} = require('./queries');

router.get('/', function (req, res) {
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

router.get('/api/location', (req, res) => {
  const name = req.query.name;

  if (name) {
    getLocationInfo(name, (err, info) => {
      if (err) {
        res.send(err);
        return;
      }
      res.send(info);
    });
  } else {
    res.status(404).send({error: 'Please give location'});
  }
});

router.post('/api/event', (req, res) => {
  let newEventData = req.body;
  getLocationInfo(req.body.Location_name, function (err, locationInfo) {
    if (err) {
      res.send(err);
      return;
    }
    if (locationInfo.length === 0) {
      createLocation(newEventData, (err, result) => {
        if (err) {
          res.send(err);
          return;
        }
        newEventData.Location_Id = result && result.insertId;
        createEvent(newEventData, (err, result) => {
          if (err) {
            res.send(err);
            return;
          }
          createEventDate({...newEventData, Event_Id: result.insertId}, (err, result) => {
            if (err) {
              res.send(err);
              return;
            }
            res.status(201).send();
          });
        });
      });
    } else {
      newEventData.Location_Id = locationInfo[0].Id;
      createEvent(newEventData, (err, result) => {
        if (err) {
          res.send(err);
          return;
        }
        createEventDate({...newEventData, Event_Id: result.insertId}, (err, result) => {
          if (err) {
            res.send(err);
            return;
          }
          res.status(201).send();
        });
      });
    }
  });
});

module.exports = router;