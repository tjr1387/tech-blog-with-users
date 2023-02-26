const router = require('express').Router();
const { User, Entry, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Create an entry
router.post('/', withAuth, async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json(error);
  }
});

// Update an entry
router.put('/:id', withAuth, async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete an entry
router.delete('/:id', withAuth, async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json(error);
  }
});



//Ideally the following three comment routes would be int heir own file, nested another level further in entryRoutes

// Create a comment
router.post('/:id/comments', withAuth, async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json(error);
  }
});

// Update a comment
router.put('/:id/comments/:commentId', withAuth, async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete a comment
router.delete('/:id/comments/:commentId', withAuth, async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json(error);
  }
});


module.exports = router;