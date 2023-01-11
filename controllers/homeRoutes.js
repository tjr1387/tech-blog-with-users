const router = require('express').Router();
const { User } = require('../models');  // will need ot add other models
const withAuth = require('../utils/auth'); // not sure if this wil be needed here

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');  // this may need to change
    return;
  }

  res.render('login');
});

// do a 404 page '*' route

module.exports = router;
