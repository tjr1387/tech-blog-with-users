// Should really be called 'getRoutes'

const router = require('express').Router();
const { User, Entry, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Renders login/signup view
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/home');
    return;
  }

  res.render('login');
});

// Renders the homepage (all entries from everyone)
router.get('/home', (res, res) => {
  // get and serialize ALL entries (just entries, no comment inclusion)
  res.render('home');   // need to pass in the data and 'logged_in'
});

// Renders the signed in user's dashboard
router.get('/dashboard/:userId', (req, res) => {  //pass in withAtuh middleware
  // get and serialze this users entries
  res.render('dashboard');  // need to pass in the data and 'logged_in'
});

// Renders one of a user's entries, along with the associated comments
router.get('/entry/:userId/:entryId', (req, res) => {     //dont need to use withAuth here
  // get and serialize this one entry, and assoc. comments
  res.render('blogentry'); // need to pass in all that data and 'logged_in'
});

// a 404 page '*' route

module.exports = router;
