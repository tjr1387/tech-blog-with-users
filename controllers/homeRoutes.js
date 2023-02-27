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
  try {
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
  } catch (error) {
    res.status(500).json(error);
  }
});

// Renders the signed in user's dashboard
router.get('/dashboard/:username', withAuth, async (req, res) => {
  // get and serialze this users entries
  res.render('dashboard', {
    logged_in: req.session.logged_in,
    username: req.session.username
  });
});

// Renders one of a user's entries, along with the associated comments

// ! Currently doesnt include comments!
router.get('/entry/:username/:entryId', async (req, res) => {
  // Grab entry by its id (via params)
  try {
    const entryData = await Entry.findByPk(req.params.entryId, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize
    const entry = entryData.get({ plain: true });

    console.log(entry);

    // Pass data into render
    res.render('blogentry', {
      ...entry,
      logged_in: req.session.logged_in,
      username: req.session.username
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// a 404 page '*' route

module.exports = router;
