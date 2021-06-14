var express = require('express');
var router = express.Router();
const { DateTime } = require('luxon');
const stats = require('../data/mlb-stats')

/* GET home page. */
router.get('/', async function (req, res, next) {
  const dateFormat = 'MM/dd/yyyy';
  const params = {
    sportId: 1,
    language: 'en',
    sortBy: 'gameDate',
    startDate: DateTime.now().plus({ days: -2 }).toFormat(dateFormat),
    endDate: DateTime.now().toFormat(dateFormat),
    hydrate: 'team',
  };
  const schedule = await stats.get('schedule', params);
  res.render('index', { title: 'Express', schedule: schedule.dates });
});

module.exports = router;
