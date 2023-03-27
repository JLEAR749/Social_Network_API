const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thought-Controller.js');

router.route('/').get(getSingleThought).post(createThought);

router
  .route('/:thoughtId')
  .get(createThought)
  .put(createThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction);

module.exports = router;
