const router = require('express').Router();
const { User, Entry, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Create an entry
router.post('/', withAuth, async (req, res) => {
  try {
    const newEntry = await Entry.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newEntry);
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
    const entryData = await Entry.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!entryData) {
      alert('Bruh you can only delete your own biz');
      res.status(404).json({ message: `No entry found with this id, or it doesn't belong to you` });
      return;
    }

    res.status(200).json(entryData);
  } catch (error) {
    res.status(500).json(error);
  }
});



//Ideally the following three comment routes would be int heir own file, nested another level further in entryRoutes

// Create a comment
router.post('/:id/comments', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      entry_id: req.params.id,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
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
    const commentData = await Comment.destroy({
      where: {
        id: req.params.commentId,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      alert('Bruh you can only delete your own biz');
      res.status(404).json({ message: `No comment found with this id, or it doesn't belong to you` });
      return;
    }

    res.status(200).json(commentData);
  } catch (error) {
    res.status(500).json(error);
  }
});


module.exports = router;