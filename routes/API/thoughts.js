const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thought-Controller.js');

router.route('/').get(getSingleThought).post(createThought)
    .get(getThoughts)
    .post(createThought)
    .get(getSingleThought)

router
  .route('/:thoughtId')
  .get(createThought)
  .post(createThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction)
  .post(addThought)
  .delete(removeThought)

module.exports = router;
