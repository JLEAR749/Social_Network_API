const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
} = require('../../controllers/thought-Controller.js');

// // /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// // /api/thought/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction).delete(deltetReaction);

module.exports = router;
