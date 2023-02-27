// Should really be called 'getRoutes'

const router = require('express').Router();
const { User, Entry, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Renders login/signup view
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login', {
    logged_in: req.session.logged_in,
    username: req.session.username
  });
});

// Renders the homepage (all entries from everyone)
router.get('/', async (req, res) => {
  // Grab all entries, with associated user's name
  const entryData = await Entry.findAll({
    include: [
      {
        model: User,
        attributes: ['name'],
      },
    ],
  });

  // Serialize
  const entries = entryData.map((project) => project.get({ plain: true }));

  // Pass data into render
  res.render('home', {
    entries,
    logged_in: req.session.logged_in,
    username: req.session.username
  });
});

// Renders the signed in user's dashboard
router.get('/dashboard/:username', (req, res) => {  //pass in withAtuh middleware
  // get and serialze this users entries
  res.render('dashboard', {
    logged_in: req.session.logged_in,
    username: req.session.username
  });
});

// Renders one of a user's entries, along with the associated comments
router.get('/entry/:username/:entryId', (req, res) => {     //dont need to use withAuth here
  // get and serialize this one entry, and assoc. comments
  res.render('blogentry', {
    logged_in: req.session.logged_in,
    username: req.session.username
  }); // need to pass in all that data and 'logged_in'
});

// a 404 page '*' route

module.exports = router;
